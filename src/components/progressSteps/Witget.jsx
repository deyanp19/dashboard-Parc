
import style from './Witget.css';

export default function Witget({step}) {
    return (
        <div>
   
  <ul class="stepper" id="stepper-form-example" data-mdb-stepper-linear="true">
    <form class="needs-validation stepper-form">
      
      <li class="stepper-step stepper-active">
        <div class="stepper-head">
          <span class="stepper-head-icon">1</span>
          <span class="stepper-head-text">step1</span>
        </div>
        <div class="stepper-content py-3">
          <div class="form-outline mb-4">
            <input type="text" id="stepper-form-first-name" class="form-control" required/>
            <label class="form-label" for="stepper-form-first-name">First name<small class="text-muted">(required)</small></label>
            <div class="invalid-feedback">invalid</div>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="stepper-form-last-name" class="form-control" required/>
            <label class="form-label" for="stepper-form-last-name">Last name<small class="text-muted">(required)</small></label>
            <div class="invalid-feedback">invalid</div>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="stepper-form-last-name" class="form-control" />
            <label class="form-label" for="stepper-form-last-name">Nickname<small class="text-muted">(optional)</small></label>
          </div>
        </div>
      </li>
      
      <li class="stepper-step">
        <div class="stepper-head">
          <span class="stepper-head-icon">2</span>
          <span class="stepper-head-text">step2</span>
        </div>
        <div class="stepper-content py-3">
          <div class="form-outline mb-4">
            <input type="text" id="form6Example3" class="form-control" required />
            <label class="form-label" for="form6Example3">Company name<small class="text-muted">(required)</small></label>
            <div class="invalid-feedback">invalid</div>
          </div>

          <div class="form-outline mb-4">
            <input type="text" id="form6Example4" class="form-control" required />
            <label class="form-label" for="form6Example4">Address<small class="text-muted">(required)</small></label>
            <div class="invalid-feedback">invalid</div>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form6Example5" class="form-control" required />
            <label class="form-label" for="form6Example5">Email<small class="text-muted">(required)</small></label>
            <div class="invalid-feedback">invalid</div>
          </div>

          <div class="form-outline mb-4">
            <input type="number" id="form6Example6" class="form-control" />
            <label class="form-label" for="form6Example6">Phone<small class="text-muted">(optional)</small></label>
            <div class="invalid-feedback">invalid</div>
          </div>
        </div>
      </li>
    
      <li class="stepper-step">
        <div class="stepper-head">
          <span class="stepper-head-icon">3</span>
          <span class="stepper-head-text">step3</span>
        </div>
        <div class="stepper-content py-3">
          <div class="form-outline mb-4">
            <textarea class="form-control" id="form6Example7" rows="4"></textarea>
            <label class="form-label" for="form6Example7">Additional information</label>
          </div>

          <div class="form-check d-flex justify-content-center mb-4">
            <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked/>
            <label class="form-check-label" for="form6Example8">Create an account?</label>
          </div>

          <button type="submit" class="btn btn-success btn-block mb-4">Place order</button>
        </div>
      </li>
      
    </form>
  </ul>
 
  <div class="d-flex justify-content-center px-3">
    <button id="form-example-prev-step" class="btn btn-primary w-100 me-2">Previous step</button>
    <button id="form-example-next-step" class="btn btn-primary w-100">Next step</button>
  </div>
 
</div>
    );
}