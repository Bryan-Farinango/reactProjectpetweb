import React from "react";
import Events from "../services/events";

import { Card, Input} from 'antd';
import 'antd/dist/antd.css';
let valor;

class EventsForm extends React.Component{


    state = {
        title: " ",
        date: " ",
        locate: " ",
        descripcion: " ",
        score: " ",
        capacity: " ",
        tasksEvent: []


    }
    nameEvent;




    async handleClickEvent(initialState) {
        const tasks = await Events.getEventsApi();
        this.setState((initialState) => {
            return {
                tasksEvent: [
                    ...initialState.tasksEvent,
                    ...tasks
                ]
            }
        })
    }

    handleChangeTitle = (e) => {
        this.setState({
            title: e.target.value
        })
    };

    handleChangeDate = (e) => {
        this.setState({
            date: e.target.value
        })
    }

    handleChangeLocate = (e) => {
        this.setState({
            locate: e.target.value
        })
    }

    handleChangeDescription = (e) => {
        this.setState({
            descripcion: e.target.value
        })
    }



    handleChangeInput = ($e, input) => {
        const newState = {};
        newState[input] = $e.target.value;
        this.setState(newState);
        valor= this.state.score;
        console.log(valor);
    };

    evento = () => {
        var url = 'http://localhost:8000/api/events';
        var data = { nameEvent: this.state.title,
                     dateEvent: this.state.date,
                     locateEvent: this.state.locate,
                     descriptionEvent: this.state.descripcion,
                     scoreEvent:valor*1,
                     quotaEvent: valor*1
                     };
        fetch(url, {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
            }).then(res=> res.json())
            .catch(error =>
            console.error('Error:', error))

    }


    render() {

        const { tasksEvent, title, date, locate, descripcion, score, capacity} = this.state;


        return(
            <div className="App">

                <button onClick={() => this.handleClickEvent(tasksEvent.id)}>Eventos</button>
                <div>
                    <br/>
                    <label htmlFor="title">Nombre </label>
                    <Input placeholder="nombre del evento" onChange={this.handleChangeTitle} /> <br/>

                    <label htmlFor="date">fecha</label>
                    <Input placeholder="fecha a realizarse" type="text" onChange={this.handleChangeDate} /><br/>

                    <label htmlFor="locate">lugar</label>
                    <Input placeholder="ubicacion del evento"  type="text" onChange={this.handleChangeLocate} /><br/>

                    <label htmlFor="description">Descripción</label>
                    <Input placeholder="descripcion del evento" type="text" onChange={this.handleChangeDescription} /><br/>

                    <label htmlFor="score">puntuación</label>
                    <Input placeholder="puntuacion por evento" onChange={(e)=>this.handleChangeInput(e, 'score')} /> <br/>

                    <label htmlFor="capacity">Capacidad</label>
                    <Input placeholder="capacidad del evento" onChange={(e)=>this.handleChangeInput(e, 'capacity')}/>

                    <br/>
                    <button onClick={this.evento}>Crear evento</button>
                </div>



                {
                    tasksEvent.map((mostrar) =>

                        <div style={{ background: '#ECECEC', padding: '30px' }}>

                            <Card   style={{ width: 300 }}>
                                {mostrar.id} <br/>{mostrar.nameEvent}
                                <br/>
                            </Card>


                        </div>

                    )


                }


            </div>
        );
    }
}

export default EventsForm;