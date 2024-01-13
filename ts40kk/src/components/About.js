import Contact from "./Contact";

export default function About({naam,umar,tankha}){
    // console.log(props)
    return (
        <div>
            <h1>About Component</h1>
            
            <Contact namee={naam} agee={umar} salaryy={tankha}/>
        </div>
    )
}