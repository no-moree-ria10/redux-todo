
const todo =(state, action)=> {
    swich(action.type){
        case 'ADD_TODO':
        return{
            id: action.id,
            text:text
        }
        default:
        return state
    }
}
export default todo 
