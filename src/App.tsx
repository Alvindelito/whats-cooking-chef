import InstagramPreview from "./components/InstagramPreview/InstagramPreview"
import { Accordion, AccordionItem } from '@szhsin/react-accordion';

function App() {
  return (
    <div>
      <div className="flex justify-center w-full h-full">
        <img src="src/assets/Whats_Cooking_Chef_1.jpg" alt="hero" />
      </div>
      {/* ig preview photos */}
      <div className="mt-2">
        <InstagramPreview />
      </div>
      {/* services */}
      <div>
        <h2 className="font-bold text-7xl uppercase underline text-center">Services</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 flex justify-center w-full">
          <img className="rounded-full" src="https://res.cloudinary.com/alvindelito/image/upload/ar_1:1,c_fill,h_400,w_400/v1719734198/services_1_aks7p4.jpg" alt="" />
          <img className="rounded-full" src="https://res.cloudinary.com/alvindelito/image/upload/ar_1:1,c_fill,h_400,w_400/v1719734198/services_2_j1zxop.jpg" alt="" />
          <img className="rounded-full" src="https://res.cloudinary.com/alvindelito/image/upload/ar_1:1,c_fill,h_400,w_400/v1719734198/services_3_vkautl.jpg" alt="" />
        </div>
      </div>
      {/* in-home meal prep service */}
      <div>
        <h2>IN-HOME MEAL PREP SERVICE</h2>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 flex justify-center w-full">
            <p>OUR CHEFS WILL CREATE A WEEKLY UNIQUE MENU</p>
            <p>OUR CHEFS WILL GROCERY LIST AND DO THE GROCERY SHOPPING FOR THE MENU</p>
            <p>OUR CHEFS WILL PREPARE THE MEAL WITHIN THE CLIENTS HOME</p>
            <p>OUR CHEFS WILL COOL, PACKAGE, LABEL, & PUT AWAY MEALS</p>
            <p>OUR CHEFS WILL DO AN INVENTORY CHECK TO HELP CREATE THE NEXT MEAL PREP SERVICE MENU AND LOWER GROCERY BILL</p>
            <p>OUR CHEFS WILL CLEAN EVERYTHING MAKING IT LOOK LIKE IF THEY WERE NEVER THERE</p>
          </div>
          <p>Pricing varies depending on meal matrix starting at <span className="bold">$250 minimum ** Not including tax & grocery bill**</span></p>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 flex justify-center w-full">
          <img className="rounded-full" src="https://res.cloudinary.com/alvindelito/image/upload/ar_1:1,c_fill,h_400,w_400/v1719734198/services_4_n0jv2h.jpg" alt="" />
          <img className="rounded-full" src="https://res.cloudinary.com/alvindelito/image/upload/ar_1:1,c_fill,h_400,w_400/v1719734198/services_5_unsnyr.jpg" alt="" />
        </div>
      </div>
      {/* dinner */}
      <div>
        <h2>DINNER & EVENT SERVICES</h2>
        <div>
          <p>CLIENTS WILL CHOOSE MEALS FROM A SET COURSE MENU/BUFFET MENU OR CLIENT & CHEF WILL CREATE A SUITABLE CUSTOM MENU</p>
          <p>OUR CHEFS WILL DO GROCERY SHOPPING FOR THE MENU</p>
          <p>OUR CHEFS WILL PREPARE THE MEALS WITHIN THE CLIENTS HOME
**WE WILL SUPPLY WARMER IF BUFFET STYLE**</p>
          <p>OUR CHEFS WILL SERVE THE MEAL ACCORDINGLY **IF BIG PARTY WE WILL SUPPLY EXTRA CHEFS OR SERVERS**</p>
          <p>OUR CHEFS WILL CLEAN UP MAKING IT SEEM LIKE THEY WERE NEVER THERE</p>
          </div>
          <p>Individual Plating: $200/person 6 people minimum (3 courses)</p>
          <p>Buffet: $100/person 20 people minimum (4 items: 1 Salad, 1 Carb, 2 proteins)</p>
          <p>(Price not including tax)</p>
      </div>
      {/* why us? */}
      <div>
        <h2>WHY US?</h2>
        <Accordion transition transitionTimeout={250}>
      <AccordionItem header="What is Lorem Ipsum?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </AccordionItem>

      <AccordionItem header="Where does it come from?">
        Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla
        vel erat quis sodales. Nam ex enim, eleifend venenatis lectus
        vitae, accumsan auctor mi.
      </AccordionItem>

      <AccordionItem header="Why do we use it?">
        Suspendisse massa risus, pretium id interdum in, dictum sit
        amet ante. Fusce vulputate purus sed tempus feugiat.
      </AccordionItem>
    </Accordion>
      </div>

    {/* CONTACT */}
    <div>
      <h2>REACH OUT TO INQUIRE ABOUT OUR SERVICES</h2>
      {/* form stuff goes here */}
    </div>
    </div>
  )
}

export default App
