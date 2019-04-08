export default {
    props: {
        value: Number,
    },
    data(){
        return {

        }
    },
    created(){
        console.log(this.value)
    },
    render(h){
        return(
            <div>{this.value}</div>
        );
    }
}