(function (Settings) {
  const $check = document.getElementById('check')
  const $log = document.querySelector('.log')
  const $loader = document.getElementById('loader')
  const $settings = document.querySelector('.settings')
  const $toggler = document.querySelector('.settings__toggle')

  const settings = new Settings({
    element: $settings,
    toggler: $toggler,
    opened: 'settings--opened'
  })
  settings.init()

  function serializeForm (form) {
    return [...new window.FormData(form).entries()]
      .map(e => e.map(encodeURIComponent).join('=')).join('&')
  }

  function sortByImpact (data) {
    return data.sort((prev, current) => current.impact - prev.impact)
  }

  function getRules (pairs) {
    return pairs.reduce((rules, rule) => {
      const [key, value] = rule

      rules.push({
        key: key,
        name: value.localizedRuleName,
        impact: value.ruleImpact
      })

      return rules
    }, [])
  }

  function renderSuggestions (data) {
    $log.innerHTML = data.reduce((html, rule) => {
      const impact = rule.impact.toFixed(1)
      const lineClass = impact < 3 ? 'fine' : 'warn'

      return `${html}
      <div class="log__line log__line--${lineClass}">
        <span class="log__impact">${impact}</span>
        <span class="log__delimiter">: </span>
        <span class="log__text">${rule.name}</span>
      </div>`
    }, '')
  }

  function convertRules2pairs (rules) {
    const rulesJson = JSON.parse(rules)
    const ruleResults = rulesJson.formattedResults.ruleResults
    const speedScore = rulesJson.ruleGroups.SPEED.score
    ruleResults.Speed = {
      localizedRuleName: 'Total',
      ruleImpact: speedScore
    }

    return Object.entries(ruleResults)
  }

  function getSortedErrors (event) {
    const get = serializeForm($check)
    event.preventDefault()
    $log.classList.remove('log--visible')
    $loader.classList.add('page-loading')
    $log.innerHTML = ''

    $check.url.disabled = true
    $check.submit.disabled = true
    fetch($check.action + '?' + get)
      .then(response => {
        if (response.ok) {
          return response.text()
        }
        throw new Error('An error occurred while retrieving or analyzing the page')
      })
      .then(data => {
        const pairs = convertRules2pairs(data)
        const rules = getRules(pairs)
        const sortedRules = sortByImpact(rules)

        renderSuggestions(sortedRules)

        $log.classList.add('log--visible')
        $loader.classList.remove('page-loading')
        $check.url.disabled = false
        $check.submit.disabled = false
      })
      .catch(error => {
        $log.innerHTML = `<span class="log__error">Error: ${error.message}</span>`
        $log.classList.add('log--visible')
        $loader.classList.remove('page-loading')
      })
  }

  $check.addEventListener('submit', getSortedErrors)
})(window.Settings);
