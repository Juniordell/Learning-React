import { act } from "react-dom/test-utils"

const initState = {
    posts: [
        {id: '1', title: 'Squirtle Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eum molestias esse atque pariatur asperiores incidunt corporis fuga, culpa dolor tempora ratione eveniet velit obcaecati qui neque alias, quis optio.'},
        {id: '2', title: 'Charmander Laid an Egg', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eum molestias esse atque pariatur asperiores incidunt corporis fuga, culpa dolor tempora ratione eveniet velit obcaecati qui neque alias, quis optio.'},
        {id: '3', title: 'A Helix Fossil was Found', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eum molestias esse atque pariatur asperiores incidunt corporis fuga, culpa dolor tempora ratione eveniet velit obcaecati qui neque alias, quis optio.'}
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_POST') {
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts: newPosts
        }
    }
    return state
}

export default rootReducer