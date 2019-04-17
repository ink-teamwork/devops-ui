export default {
    props: {

    },
    data(){
        return{
            text: "",
        }
    },
    render(h){
        console.log(this.$slots.default);
        return(
            <button>{this.text}</button>
        )
    }
}