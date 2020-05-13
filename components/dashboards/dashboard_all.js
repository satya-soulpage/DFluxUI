import Link from "next/link"

const DashboardsAll = props => {
    return (
        <>
            <div>
                <span class="header">Dashboards</span><input class="search" name="" placeholder="search heare"></input> Filter : <input name=""></input> Sort : <input name=""></input>
                <Link href="/dashboards/create"><button>Create</button></Link>
                <hr></hr>
                <table border="0" class="table-b">
                    <tr><td>Name</td><td>Created By</td><td>Last Modified</td><td>Sharing</td></tr>
                    <tr><td>Satya</td><td>Ravi</td><td>2/12/2010</td><td></td></tr>
                    <tr><td>Satya</td><td>Ravi</td><td>2/12/2010</td><td></td></tr>
                    <tr><td>Satya</td><td>Ravi</td><td>2/12/2010</td><td></td></tr>
                    <tr><td>Satya</td><td>Ravi</td><td>2/12/2010</td><td></td></tr>
                </table>
            </div>
            <style jsx >{`
            .create-btn{
                margin-left: 16%;
            }
                .table-b{
                    table-layout: auto;
                     width: 89%;
                }
                .header{
                    color: #0076FF;
                }
                .search{
                    margin-left: 19%;
                }
        `}</style>
        </>
    )
}
export default DashboardsAll