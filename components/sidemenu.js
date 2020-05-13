import Link from 'next/link'
// import {'../'}
const Sidemenu = props => {
    return (
        <>

            <h4>Home</h4>
            <img class="logo" src="/static/images/header-icon.png"></img>
            <hr></hr>
            <div class="event">
                <img class="event-img" src="/static/images/icons-512.png"></img>
                <Link href="/dashboards/all">
                    <span> Dashboards</span>
                </Link>
            </div>
            <style jsx global>{`
        .logo{
            width:67px
        }
        .event{
            margin-top:30px
        }
        .event-img{
            width:40px
        }
        `}</style>
        </>
    )
}
export default Sidemenu