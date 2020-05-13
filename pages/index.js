import React from 'react'
import Layout from '../components/Layout'


const Home = props => (
  <>
    <Layout >
      <div className="home-img">
        <img src="/static/images/home-page.png"></img>
      </div>
    </Layout>
    <style jsx>{`
     .home-img{
      margin-left: 31%;
      margin-top: 6%;
     }
    `}</style>
  </>
)

// amp-script requires absolute URLs, so we create a property `host` which we can use to calculate the script URL.
export async function getServerSideProps({ req }) {
  // WARNING: This is a generally unsafe application unless you're deploying to a managed platform like Vercel.
  // Be sure your load balancer is configured to not allow spoofed host headers.
  return { props: { host: `${getProtocol(req)}://${req.headers.host}` } }
}

function getProtocol(req) {
  if (req.connection.encrypted) {
    return 'https'
  }
  const forwardedProto = req.headers['x-forwarded-proto']
  if (forwardedProto) {
    return forwardedProto.split(/\s*,\s*/)[0]
  }
  return 'http'
}

export default Home
