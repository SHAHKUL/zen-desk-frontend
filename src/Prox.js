// var list={
//   "_id": "65a38723119b9e22895677eb",
//   "name": "zen",
//   "email": "zen",
//   "password": "$2a$10$tZh0UyKAq5J1mpK/1R49buJN3MuG4rqktaUFSgLvcwd2yZ2dh.myW",
//   "task": [
//     {
//       "name": "good",
//       "title": "frontend",
//       "frontend": "front",
//       "backend": "backk"
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "client",
//       "backend": "clinet"
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "clietn",
//       "backend": "server"
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "",
//       "backend": ""
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "sdfsdfsdf",
//       "backend": "sdfadsf"
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "dsf",
//       "backend": "dsffsdfsdfdsf"
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "sdadsf",
//       "backend": "sdcdsafsd"
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "date",
//       "backend": "date",
//       "created": "2024-01-21T14:36:39.983Z"
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "https://github.com/SHAHKUL/Price-tag/tree/main/build",
//       "backend": "https://github.com/SHAHKUL/Price-tag/tree/main/build",
//       "created": "2024-01-24T09:41:59.079Z"
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "sadfdf",
//       "backend": "dsfsdfsdf",
//       "created": "2024-01-24T14:49:49.532Z"
//     },
//     {
//       "name": "zen",
//       "title": "learning redux",
//       "frontend": "ssdfsdf",
//       "backend": "safdsadas",
//       "created": "2024-01-24T14:50:50.071Z",
//       "day": "11"
//     }
//   ],
//   "isAdmin": false,
//   "createdAt": "2024-01-14T07:02:59.366Z",
//   "updatedAt": "2024-01-24T14:50:50.083Z",
//   "__v": 0,
//   "batch": "b22"
// }
// var str=list.task[0].sha='sdf'
// console.log(list.task[0])

import React from "react";

function Prox() {
  return (
    <div class="demo-page">
      <div class="demo-page-navigation"></div>
      <main class="demo-page-content">
        <section>
          <div class="href-target" id="input-types"></div>
          <h1>
    
            Input types
          </h1>
          <p>All available input types are included</p>

          <div class="nice-form-group">
            <label>Text</label>
            <input type="text" placeholder="Your name" value="" />
          </div>

          <div class="nice-form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" value="" />
          </div>

          <div class="nice-form-group">
            <label>Phonenumber</label>
            <input type="tel" placeholder="Your phonenumber" value="" />
          </div>

          <div class="nice-form-group">
            <label>Url</label>
            <input type="url" placeholder="www.google.com" value="" />
          </div>

          <div class="nice-form-group">
            <label>Password</label>
            <input type="password" placeholder="Your password" />
          </div>

          <div class="nice-form-group">
            <label>Search</label>
            <input type="search" placeholder="Search all the things" value="" />
          </div>

          <div class="nice-form-group">
            <label>Disabled field</label>
            <input type="text" disabled placeholder="Your name" value="" />
          </div>
          <details>
            <summary>
              <div class="toggle-code">
              
                Toggle code
              </div>
            </summary>
            <script src="https://gist.github.com/nielsVoogt/e25c9c8f2b8456bbd1239b775d21333f.js"></script>
          </details>
        </section>

        <section>
          <div class="href-target" id="checkbox-and-radio"></div>
         
          <p>
            These are your basic <code>input[type="radio"]</code> and
            <code>input[type="checkbox"]</code> elements. They have a label and
            can contain secondary information by adding a<code>small</code>{" "}
            element inside the <code>label</code>.
          </p>

          <fieldset class="nice-form-group">
            <div class="nice-form-group">
              <input type="radio" name="radio" id="r-1" />
              <label for="r-1">Radio button with label</label>
            </div>

            <div class="nice-form-group">
              <input type="radio" name="radio" id="r-2" />
              <label for="r-2">
                Radio button with label
                <small>Radio can have additional information</small>
              </label>
            </div>
          </fieldset>

          <fieldset class="nice-form-group">
            <div class="nice-form-group">
              <input type="checkbox" id="check-1" />
              <label for="check-1">Checkbox with label</label>
            </div>

            <div class="nice-form-group">
              <input type="checkbox" id="check-2" />
              <label for="check-2">
                Checkbox with label
                <small>I am additional information regarding this field</small>
              </label>
            </div>
          </fieldset>
          <br />
   

          <fieldset class="nice-form-group">
            <div class="nice-form-group">
              <input type="checkbox" id="check-3" class="switch" />
              <label for="check-3">Switch with label</label>
            </div>

            <div class="nice-form-group">
              <input type="checkbox" id="check-4" class="switch" />
              <label for="check-4">
                Switch with label
                <small>I am additional information regarding this field</small>
              </label>
            </div>
          </fieldset>

          <details>

            <script src="https://gist.github.com/nielsVoogt/5c490e16bc1b63bba29d4ee76477f94d.js"></script>
          </details>
        </section>

        <section>
          <div class="href-target" id="fieldset"></div>
          <h1>
           
            Fieldset
          </h1>
          <p>
            The <code>fieldset</code> is used to group multiple related input
            fields. All nested <code>.nice-form-group</code> elements within
            will automaticly have a smaller margin.
          </p>

          <fieldset class="nice-form-group">
            <legend>Select your favorite framework</legend>
            <div class="nice-form-group">
              <input type="radio" name="radio" id="react" />
              <label for="react">React</label>
            </div>

            <div class="nice-form-group">
              <input type="radio" name="radio" id="vue" />
              <label for="vue">Vue</label>
            </div>

            <div class="nice-form-group">
              <input type="radio" name="radio" id="angular" />
              <label for="angular">Angular</label>
            </div>
          </fieldset>

          <fieldset class="nice-form-group">
            <legend>Select your favorite languages</legend>
            <div class="nice-form-group">
              <input type="checkbox" id="css" />
              <label for="css">CSS</label>
            </div>

            <div class="nice-form-group">
              <input type="checkbox" id="html" />
              <label for="html">HTML</label>
            </div>

            <div class="nice-form-group">
              <input type="checkbox" id="js" />
              <label for="js">Javascript</label>
            </div>
          </fieldset>
          <details>
            <summary>
    
            </summary>
            <script src="https://gist.github.com/nielsVoogt/e513d0df728dfc3fb1f5f9ecae042bf8.js"></script>
          </details>
        </section>

        <section>
          <div class="href-target" id="icons"></div>
         
          <p>
            For some input types it could make sense to show a icon. These icons
            are hidden by default but can be added by adding either
            <code>.icon-left</code> or <code>.icon-right</code> to the input
            element. The icons used are from
            <a href="https://feathericons.com/" target="_blank">
              feathericons
            </a>
            .
          </p>

          <div class="nice-form-group">
            <label>Phonenumber</label>
            <input
              type="tel"
              placeholder="Your phonenumber"
              value=""
              class="icon-left"
            />
          </div>

          <div class="nice-form-group">
            <label>Url</label>
            <input
              type="url"
              placeholder="www.google.com"
              value=""
              class="icon-left"
            />
          </div>

          <div class="nice-form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Your email"
              value=""
              class="icon-left"
            />
          </div>

          <div class="nice-form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              class="icon-left"
            />
          </div>

          <div class="nice-form-group">
            <label>Phonenumber</label>
            <input
              type="tel"
              placeholder="Your phonenumber"
              value=""
              class="icon-right"
            />
          </div>

          <div class="nice-form-group">
            <label>Url</label>
            <input
              type="url"
              placeholder="www.google.com"
              value=""
              class="icon-right"
            />
          </div>

          <div class="nice-form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Your email"
              value=""
              class="icon-right"
            />
          </div>

          <div class="nice-form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Your password"
              class="icon-right"
            />
          </div>

          <details>
      
            <script src="https://gist.github.com/nielsVoogt/8cc4cd8ebc6e81c3f889f1b40037b0cc.js"></script>
          </details>
        </section>

        <section>
          <div class="href-target" id="validation"></div>
       
          <p>
            Fields that have a <code>required</code> attribute can be valid or
            invalid based on their value. When a user focuses on a invalid field
            the styling is set back to default.
          </p>

          <div class="nice-form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Your email"
              value="this is not a email adress"
              required
            />
          </div>

          <div class="nice-form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Your email"
              value="nice@forms.com"
              required
            />
          </div>
          <details>
         
            <script src="https://gist.github.com/nielsVoogt/75ebf8c12ca420eb2089312a931ab4cf.js"></script>
          </details>
        </section>

        <section>
          <div class="href-target" id="date"></div>
     
          <p>
            Date fields show icons by default. The <code>month</code>,
            <code>week</code> and <code>date</code> fields have a fixed min
            width set at 14em. <code>time</code> is set at 7em.
          </p>

          <div class="nice-form-group">
            <label>Month</label>
            <input type="month" value="2018-05" />
          </div>

          <div class="nice-form-group">
            <label>Week</label>
            <input type="week" value="2017-W01" />
          </div>

          <div class="nice-form-group">
            <label>Date</label>
            <input type="date" value="2018-07-22" />
          </div>

          <div class="nice-form-group">
            <label>Time</label>
            <input type="time" value="13:30" />
          </div>

          <details>
           
            <script src="https://gist.github.com/nielsVoogt/2ae279af287e520f545285b0d7c45828.js"></script>
          </details>
        </section>

        <section>
          <div class="href-target" id="other"></div>
      

          <div class="nice-form-group">
            <label>Textarea</label>
            <textarea rows="5" placeholder="Your message"></textarea>
          </div>

          <div class="nice-form-group">
            <label>Select</label>
            <select>
              <option>Please select a value</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>

          <div class="nice-form-group">
            <label>File upload</label>
            <input type="file" />
          </div>

          <div class="nice-form-group">
            <label>Range slider</label>
            <input type="range" min="0" max="15" />
          </div>

          <div class="nice-form-group">
            <label>Number</label>
            <input type="number" placeholder="1234" />
          </div>

          <div class="nice-form-group">
            <label>Color</label>
            <input type="color" />
          </div>

          <details>
         
            <script src="https://gist.github.com/nielsVoogt/f0480b1a2d0deda02138d61ec5c9f4d0.js"></script>
          </details>
        </section>

        <section>
          <div class="href-target" id="reset"></div>
         
          <p>
            There is also a reset only version available, this version provides
            styled form fields out of the box without any wrapping class. This
            does however mean that <code>.icon-left</code>,{" "}
            <code>.icon-right</code> or <code>.switch</code> are not included.
          </p>
          <p>
            Grab the raw CSS{" "}
            <a href="https://raw.githubusercontent.com/nielsVoogt/nice-forms.css/main/dist/nice-forms-reset.css">
              here
            </a>
            , or import the reset from <strong>unpkg</strong> via
            <code>
              https://unpkg.com/nice-forms.css@0.1.7/dist/nice-forms-reset.css
            </code>
          </p>

         
        </section>

        <section>
          <div class="href-target" id="customization"></div>
         
          <p>The styling is highly customizable using css variables.</p>
          <script src="https://gist.github.com/nielsVoogt/63daf967a17776d00f5923048cf28daf.js"></script>
        </section>

        <section>
          <div class="href-target" id="contribute"></div>
        
          <p>
            If you encounter a bug on any device or have suggestions for
            improvement, don't hesitate to open a bug report or pull request.
          </p>

       
        </section>

        <footer>Made with ♥ for CSS</footer>
      </main>
    </div>
  );
}

export default Prox;
