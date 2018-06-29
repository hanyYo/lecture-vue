import View from './View.js'

const tag = '[TabView]'

const TabView = Object.create(View)

TabView.tabNames = {
  recommand: '추천 검색어',
  recent: '최근 검색어',
}

TabView.setup = function(el) {
  this.init(el)
  this.bindEvents()
  return this
}

TabView.setActiveTab = function (tabName) {

  [].forEach.call(this.el.querySelectorAll('li'), function (li) {
    li.className = li.innerText.includes(tabName) ? 'active' : ''
  })
  this.show()
}

TabView.bindEvents = function() {

  this.el.addEventListener('click', e => this.onClickTab(e));

}

TabView.onClickTab = function ({target}) {
  if(target.tagName.toLowerCase() !== 'li') return
  const tabName = target.innerText
  this.setActiveTab(tabName)

  this.emit('@changeTab', {tabName})
  // const arrAsLi = Array.from(this.el.querySelectorAll('li'));
  // arrAsLi.forEach( el => el.className = '')
  // target.className = 'active'
  // let idx = arrAsLi.findIndex( el => el.className === 'active')
  // this.emit('@changeTab', {idx})
}

export default TabView
