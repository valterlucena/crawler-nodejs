import React, {Component} from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Seletor from '../../components/Seletor/Seletor';

class MainPage extends Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <Seletor />
                    </Container>
                </Jumbotron>
                
            </div>
        )
    }

}

export default MainPage;