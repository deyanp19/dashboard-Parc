import Accordion from "@/components/accordion/Accordion";
import Card from "@/components/card/Card";
import Clock from "@/components/clock/Clock";
import Jumbotron from "@/components/jumbotron/Jumbotron";
import Witget from "@/components/progressSteps/Witget";
import Sidebar from "@/components/sidebar/Sidebar";


export default function Dashboard() {
    const text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam in quasi ipsum eveniet, dolorum voluptatem esse nesciunt ea ullam cupiditate incidunt! Alias ea dolore eius, odio molestias qui sint dolorem!"
    const title="Jumbotron Example";
    const image="/images/Payarc-logo-tilted.png";

  const cardData=[
    {title:"Payarc Terminals",text:"Ever wondering about those mysterious NABA fees on your statement?"},{title:"Payarc + Curv",text:"Ever wondering about those mysterious NABA fees on your statement?"},{title:"Payarc Banks",text:"Ever wondering about those mysterious NABA fees on your statement?"}
  ]


    return(
       <div>
         {/* <Sidebar name="Jhon Doe" />
          <Accordion /> */}
        {/* <Jumbotron title={title} text={text} image={image}/> */}
        {/* {cardData.map(x=><Card title={x.title} text={x.text}/>)} */}

        <Clock/>
        <Witget />
        </div>
    );
}