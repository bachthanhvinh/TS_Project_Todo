import '.css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const templates = ListTemplate.instance

  const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement
  itemEntryForm.addEventListener('submit', (event: SubmitEvent): void => {
    event.preventDefault()
  })

  const clearItems = document.getElementById('clearItemsButton') as
  HTMLButtonElement

  clearItems.addEventListener('click', (): void => {
    fullList.clearList()
    templates.clear()
  })

  fullList.load()
  templates.render(fullList)
}

document.addEventListener('DOMContentLoaded', initApp)