
<img width="1552" alt="Снимок экрана 2024-08-23 в 01 33 51" src="https://github.com/user-attachments/assets/29497270-0df8-4adc-b1a5-0ee7256c3a61">

To run just:
1) `npm ci`
2) `npm run start`

Project based on Angular.io LTS (18.2.0)

**Ext libs used:**
* @ngrx - simplify state management
* tailwind - for structured and simple design
* flowbite - components lib on top of tailwind

**Project Structure**

* This project utilizes component standalone way.
* Components folder contains various shared components such as key-value, card, button, etc., which can be reused.
* Pages folder contains only one page - Retirement.
* Services folder contains interface for retirement and a service for data retrieval. The service leverages
  a https://mockapi.io/ project, providing a realistic mock server.
* Store contains a simple retirement actions/effects/reducer/selectors.

**Conclusion**

At this stage the project can be easily finalised and modified based on the tasks and available deadlines. The code is easy to maintain and extend


