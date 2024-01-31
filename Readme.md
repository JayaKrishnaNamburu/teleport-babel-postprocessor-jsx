### teleport-postprocessor-transpile-jsx

Transpile code-generator's JSX code using [sucrase](https://github.com/alangpierce/sucrase).
To quickly prototype for browser based environments.

#### Before

```jsx
import React from 'react'
import PropTypes from 'prop-types'

const SimpleComponent = (props) => {
    return (
    <div>
        <span>
        {props.heading}
        World!
        </span>
    </div>
    )
}

SimpleComponent.defaultProps = {
    heading: 'Hello',
}

SimpleComponent.propTypes = {
    heading: PropTypes.string,
}

export default SimpleComponent
```

#### After

```js
import React from 'react'
import PropTypes from 'prop-types'

const SimpleComponent = (props) => {
    return (
        React.createElement('div', null
            , React.createElement('span', null
            , props.heading, "World!"

            )
        )
    )
}

SimpleComponent.defaultProps = {
    heading: 'Hello',
}

SimpleComponent.propTypes = {
    heading: PropTypes.string,
}

export default SimpleComponent
```