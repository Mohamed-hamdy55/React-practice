export default  function Spinner(){
    console.log("iam spinner")
    return(
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>
      ); // Show a loading message while fetching data
}