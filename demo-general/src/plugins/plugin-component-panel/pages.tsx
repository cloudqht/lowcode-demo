import React, {useEffect, useState} from "react";
import {Button} from "@alifd/next";
import {request, request2, request3} from "../../utils/request";
import Ct1 from "./chart";

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>Hello world</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

function NumberList(props) {
    const numbers = props.numbers;
    const [nums, setNums] = useState([1, 2, 3]);
    // setNums([1,3,4])
    const listItems = nums.map((number) =>
        (<li key={number.toString()}>
            {number}
        </li>)
    );
    useEffect(()=>{
        console.log("wtf?")
    },[nums])
    return (
        <div>
            <Button onClick={() => {
                let num2 = Array.from(nums);
                if(num2.length>0){
                    num2 = num2.slice(0, -1);
                    console.log(num2.length);
                }
                setNums(num2);
            }} type={"primary"} size={"large"}>click</Button>
            <ul style={{listStyle: "inside"}}>
                {listItems}
            </ul>
        </div>

    )
}

const numbers = [1, 2, 3, 4];
const url = 'http://rap2api.taobao.org/app/mock/250089/testCompanies';
const data = [{name:'kangkang', count: 2},{name:'kang', count: 3},{name:'kangg', count: 4}]
export default () => {
    return (
        <div style={{float: 'inline-end'}}>
            <Timer/>
            <NumberList numbers={numbers}/>
            <Button onClick={() => {
                numbers.map((val, ind) => (
                    console.log(val + " " + ind)
                ));
                const c = request3(url, 'get');
                console.log("c = ", c)
                // const b = request(url, 'get');
                // console.log("b = ", b)
                // const a = request2(url, 'get')
                //
                // console.log("efef:", a.then(res => {
                //     console.log("ffff", res)
                //     return res;
                // }))
            }} type={"primary"} size={"large"}>click</Button>
            {/*<Chart height={400}  padding={[10, 20, 50, 40]} autoFit data={data}>*/}
            {/*    <Interval position="name*count" />*/}
            {/*</Chart>*/}
            <Ct1 data ={data}></Ct1>
        </div>
    )

}