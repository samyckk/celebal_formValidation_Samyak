import KeyValueTable from "./KeyValueTable"



const Information = ({signup})=>{
    return (
        <>
            <h1>Signup Succcessful</h1>
            <div style={{display: "flex", margin: "auto", width: "50%", justifyContent:"center"}}>

            <KeyValueTable data={signup} />
                
            </div>
        </>
    )
}


export default Information



