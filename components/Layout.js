import NextHead from 'next/head'
import Sidemenu from './sidemenu'

// Your app's theme color
const THEME_COLOR = '#005af0'

/**
 * A sample page layout installing the AMP Serviceworker by default.
 *
 * @param {Props} props
 */
const Layout = props => (
  <>
    <div class="row">
      <div class="col-md-12">
        <div class="col-md-2 sidemenu"><Sidemenu></Sidemenu></div>
        <div class="col-md-10 main-body">{props.children}</div>
      </div>
    </div>
    <style jsx global>{`
   .sidemenu {
     background-color:#FFFFFF;
     width:55px;
   }
   .main-body {
    margin-top: -14%;
    margin-left: 9%;
   }
 `}</style>
  </>
)

// Layout.propTypes = {
//   title: PropTypes.string,
//   description: PropTypes.string,
// }

export default Layout
