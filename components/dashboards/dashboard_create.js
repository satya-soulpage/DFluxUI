const DashboardCreate = props => {

    return (
        <>
            <div>
                <span class="header">Dashboards</span><input class="search" name="" placeholder="search heare"></input> Filter : <input name=""></input> Sort : <input name=""></input>
                <hr></hr>
                <section className="hero">
                    <span class="create-dsh"><img src="/static/images/dashboard-create.png"></img></span>
                    <a href="#">
                        <h3>Global health risks &rarr;</h3>
                        <p>Created By: Mitchell Robertson
                         Last Modified: March 29, 2013 9:01 PM</p>
                    </a>
                    <a href="#">
                        <h3>ABC Sales Report &rarr;</h3>
                        <p>Created By: Lee Jones Last Modified: May 31, 2015 12:56 AM.</p>
                    </a>
                    <a href="#">
                        <h3>ABC Sales Report &rarr;</h3>
                        <p>Created By: Mitchell Robertson Last Modified: March 29, 2013 9:01 PM</p>
                    </a>

                </section>
                <hr></hr>
                <section className="hero">
                    <a href="#">
                        <h3>Topic XYZ &rarr;</h3>
                        <p>Created By: Tyrone Williamson February 5, 2018 1:55 PM</p>
                    </a>
                    <a href="#">
                        <h3>Topic XYZ &rarr;</h3>
                        <p>Created By: Tyrone Williamson February 5, 2018 1:55 PM</p>
                    </a>
                    <a href="#">
                        <h3>Topic XYZ &rarr;</h3>
                        <p>Created By: Tyrone Williamson February 5, 2018 1:55 PM</p>
                    </a>
                    <a href="#">
                        <h3>Topic XYZ &rarr;</h3>
                        <p>Created By: Tyrone Williamson February 5, 2018 1:55 PM</p>
                    </a>
                </section>
            </div>
            <style jsx >{`
            .create-dsh{
                position: absolute;
                width: 287px;
                height: 120px;
                left: 126px;
                top: 115px;

                background: red;
                border: 1px dashed #0076FF;
                border-radius: 4px;
            }
            .create-btn{
                margin-left: 16%;
            }
                .table{
                    table-layout: auto;
                     width: 89%;
                }
                .header{
                    color: #0076FF;
                }
                .search{
                    margin-left: 19%;
                }
                .hero {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                    grid-gap: 1rem;
                  }
                  .hero > a {
                    display: block;
                    padding: 1rem;
                    text-align: left;
                    text-decoration: none;
                    background-color: #005af0;
                  }
                  .hero h3 {
                    margin: 0;
                    color: #067df7;
                    color: #fff;
                  }
                  .hero p {
                    margin: 0;
                    color: #fff;
                  }
        `}</style>
        </>
    )
}
export default DashboardCreate