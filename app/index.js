const React = require('react')
const ReactDom = require('react-dom')

require('./index.css')

class App extends React.Component {
	render () {
		return (
			<h1>Hello World</h1>
		)
	}
}

ReactDom.render(
	<App />,
	document.getElementById('app')
)
