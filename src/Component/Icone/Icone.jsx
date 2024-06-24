import "../../Style/main.css"

export default function icone({url}){
    return(
        <div className="iconeBackground">
            <img className="icone" src={url} alt="Icone" />
        </div>
    )
}