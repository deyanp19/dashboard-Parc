import Accordion from "@/components/accordion/Accordion";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Sidebar from "@/components/sidebar/Sidebar";


export default function Dashboard() {
    const text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam in quasi ipsum eveniet, dolorum voluptatem esse nesciunt ea ullam cupiditate incidunt! Alias ea dolore eius, odio molestias qui sint dolorem!"
    const title="Jumbotron Example";
    const image="/images/Payarc-logo-tilted.png"
    return(
       <div>
         {/* <Sidebar name="Jhon Doe" />
          <Accordion /> */}
        <Jumbotron title={title} text={text} image={image}/>
        </div>
    );
}