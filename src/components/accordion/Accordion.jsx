import styles from './Accordion.css';


export default function Accordion() {
 const easel3=<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-easel3-fill" viewBox="0 0 16 16">
 <path d="M8.5 12v1.134a1 1 0 1 1-1 0V12h-5A1.5 1.5 0 0 1 1 10.5V3h14v7.5a1.5 1.5 0 0 1-1.5 1.5h-5Zm7-10a.5.5 0 0 0 0-1H.5a.5.5 0 0 0 0 1h15Z"/>
</svg>

    return (
        <div className="accordion" id="accordionPayarc">
            <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button  gy-4" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="icon-easel shadow p-3 mb-5 bg-white rounded text-primary">{easel3}
                            </div>  
                        <div>

                        <h5 className="title-accordion">Apply app</h5>
                        <p>The Apply app is an online application tool that allows merchants to fill out and submit their onboarding application and documentation.</p>
                        </div>
                        </button>
                    </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <div className="icon-easel shadow p-3 mb-5 bg-white rounded text-primary">{easel3}
                            </div> 
                        <div>

                         <h5 className="title-accordion"> Admin portal</h5>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi dolorum incidunt necessitatibus omnis veritatis dolor eum! Voluptatibus nisi iusto dignissimos modi voluptatem officiis! Fugit unde sunt labore. Ex, consequuntur ab.</p>
                        </div>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="icon-easel shadow p-3 mb-5 bg-white rounded text-primary">{easel3}
                            </div> 
                        <div className="title-desctiption">

                        <h5 className="title-accordion">Merchant Portal</h5>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem error nihil eveniet mollitia. Cupiditate, laudantium qui dignissimos doloremque, exercitationem saepe ipsa repellendus, magni minima praesentium officia illo nihil corporis maiores!</p>
                        </div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <div className="icon-easel shadow p-3 mb-5 bg-white rounded text-primary">{easel3}
                            </div>  
                        <div>

                        <h5 className="title-accordion">Curv POS</h5>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi sapiente eum a blanditiis placeat commodi autem et nam corporis. Illum autem quibusdam veniam ullam nesciunt qui inventore cum natus.
                        </p>
                        </div>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
    );
}