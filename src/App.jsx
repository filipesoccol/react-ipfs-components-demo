import { useEffect, useState } from 'react'
import logo from './assets/logo.svg'
import { IPFSAvatar, IPFSSquared, IPFSFetcher } from 'react-ipfs-components'
import './index.css'

function App() {

  const [metadataContent, setMetadataContent] = useState();
  const [metadataImage, setMetadataImage] = useState();

  useEffect( () => { 
    fetchJSON()
  }, [])

  const fetchJSON = async () => {
    const json = await IPFSFetcher.FetchJSON('https://ipfs.io/ipfs/QmWXJXRdExse2YHRY21Wvh4pjRxNRQcWVhcKw4DLVnqGqs/8565')
    console.log('METADATA', json)
    setMetadataContent(json);
    setMetadataImage(json.image);
  }

  return (
    <div className="App">
      <div>
        <a href="https://github.com/filipesoccol/react-ipfs-components" target="_blank">
          <img src={logo} className="logo" alt="IPFS React Components Logo" />
        </a>
        <h1>React IPFS Components</h1>
        <h2>Load any IPFS content from the fastest gateway available just passing a valid path.</h2>
      </div>
      <div className="card">
        <div>
          <p>The plugin itself verify for you the fastest suitable gateways from the <a href="https://ipfs.github.io/public-gateway-checker/">Public Gateways list</a> provided by <a href="https://protocol.ai/">Protocol Labs</a>.</p>
          <p>Once you have successfully connected to at least 3 of them, the content will show up automatically.</p>
        </div>
      </div>
  <div className="card">
    <div><code>{`<IPFSAvatar size={80} radius={80} src="...">`}</code></div>
    <div className="flex-container">
      <IPFSAvatar size={200} radius={20} src="ipfs://QmW4rFNKTYRFztnD45bSQRJ45XHn81yhkc36vRZoxxYvj2/875"/>
    </div>
  </div>
  <div className="card">
    <div><code>{`<IPFSSquared width={30} height={30} src="..."`}</code></div>
    <div className="flex-container">
      <IPFSSquared width={200} height={200}  src="Qme4SpgD8jgNyDo8AUfAsHfWS4qL8du7Vw4J4qzJ3YKS4J"/>
    </div>
    <p>Here some examples loading images from IPFS using fastest gateways successfully connected to your machine.</p>
    <p>Each time you fill a source for the image, it will try to fetch from the 3 faster gateways connected.</p>
    <p>Once the first responds, it is selected automatically.</p>
  </div>
  <div className="card">
    <div className="flex-container">
      <div>
          <p>
            You can also use the function 
            <br/><code>IPFSFetcher.FetchJSON('cid or path')</code>
            <br/>To load JSON/Metadata from NFTs or documents stored on IPFS.
          </p>
          {metadataContent && <div className="json-section">{JSON.stringify(metadataContent, undefined, 2)}</div>}
      </div>
      <div className="avatar-section">
        <IPFSAvatar size={200} radius={200} src={metadataImage}/>
      </div>
    </div>
  </div>
  <div className="card">
    <p className="aligned-left">Sources for media supported includes:</p>
    <p className="aligned-left"><b>Single CIDv0 or CIDv1</b>: QmPbxeGcXhYQ...LnGKnF8pVFmGsvqi</p>
    <p className="aligned-left"><b>CIDv0 or CIDv1 with subpath</b>: bafybei...rry4fnxq/1.png</p>
    <p className="aligned-left"><b>IPFS protocol path</b>: ipfs://QmTDxn...Z9LmFjReuH9/</p>
    <p className="aligned-left"><b>Gateway path (will be replaced by most suitable)</b>: https://ipfs.io/ipfs/bafyb....ry4fnxq/1.png</p>
    <p className="aligned-left"><b>CIDv1 subdomain and Gateway(will also be replaced)</b>: https://bafybei...2kfuca.ipfs.dweb.link/2.png</p>
    <p className="aligned-left">You can even pass normal URLs withou any reference to IPFS, they will not be changed and will fetch correct path.</p>
  </div>
  <p>
    Creator
  </p>
  <p>
    <a href="https://github.com/filipesoccol" target="_blank" rel="noopener norefferer">
      <img className="avatar" src="https://avatars.githubusercontent.com/u/13040410"/>
    </a>
  </p>
  <p className="read-the-docs">Click on the Vue IPFS logo to check full documentation and roadmap for the product.</p>
    </div>
  )
}

export default App
