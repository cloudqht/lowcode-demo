import { Chart, Interval} from 'bizcharts';
function Ct1(props){
    return (
        <Chart height={400} padding={[10, 20, 50, 40]} autoFit {...props}>
            <Interval position="name*count"/>
        </Chart>
    )
}
export default Ct1