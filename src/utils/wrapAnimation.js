import React,{Component} from 'react'
import { CSSTransition } from "react-transition-group";

function wrapAnimation(WrappedComponent,enterActive,exitActive) {
    return class extends Component {
        render() {
            return (
                <CSSTransition
                    in={this.props.match !== null}
                    classNames={{
                        enter: 'animated',
                        enterActive: enterActive,
                        exit: 'animated',
                        exitActive: exitActive
                    }}
                    timeout={800}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <WrappedComponent {...this.props} />
                </CSSTransition>
            )
        }
    }
}

export default wrapAnimation
