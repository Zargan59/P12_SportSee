import "../../Style/main.css"
/**
 * Component showing different activity
 * @param {string} url
 * @returns {JSX}
 */
export default function icone({url}){
    return(
        <div className="iconeBackground">
            <img className="icone" src={url} alt="Icone" />
        </div>
    )
}