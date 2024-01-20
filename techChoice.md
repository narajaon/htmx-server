# HTMX vs React
## HTMX / EJS
- Pros:
    - one source of truth - less bugs, simpler code
    - harder to make bad code *with the right architecture* - less bugs, simpler code
    - new and shiny, could attract new cofounders - edgy tech startup
    - lightweight, very fast - edgy tech startup / selling point to gym owners
    - backend developer friendly - no need to learn React / Redux
    - beginner friendly - simpler code
    - more secure, everything is in the server
    - very easy caching
    - has support for IE
    - very fast hot reload
- Cons:
    - new and untested in production - could have undocumented surprises but the code is tiny
    - need to figure out a good architecture - need more experience with it
    - non-existent ecosystem (editor, libraries, linters, jsdoc) - A template engine with excellent tooling
    - code navigation is clunky, no jumping
    - messy to read - when you're not used to it
    - prop drilling - if the dom is very deep
    - version 2.0 will add major changes

Conclusion:
    - Less bugs and simpler code but need to think of the right architecture
    - cutting edge tech
        - Helps to attract new developers
        - Helps with performance
    - Need to find a mature template engine
    - Need to setup a lot of snippets

## React / NextJS
- Pros:
    - super mature tech
        - tooling ecosystem
        - easy way to get help
        - great doc
        - easy to find code snippets from libs
        - has asset optimization builtin
    - great synthax, just javascript
    - proven and known architecture
    - client side oriented
        - easy to have client side logic
        - easy to use external libs (ex: graphs)
- Cons:
    - has a lot of complexity
        - mostly with NextJS
        - easy to do bad code with hooks / HOC etc.
        - typescript on the server AND on the client
    - boring tech
        - does not have a good appeal to elite frontends and backends

Conclusion:
    - nice tooling and proven tech
    - can easily do shitty code with unless server components ?
    - easier to do client-side specific computations (animations, etc.)


# UX ideas
## Schedule
- slot multiselection
    - select multiple slots accross multiple days
    - store them in the localStorage
    - a big CTA appears to validate
    - a list of selected slot appears before validating
    - validate choices when done
- scroll to top button on mobile
- manage free training slots (whole day / half a day)
    - extra slot at the end of morning / evening slots ?


# MVP scope
- Schedule
    - As a user, I can see a schedule with time slots of sports sessions
        - When I click on a slot
            - The selected slot is highlighted
            - I can click on other slots
            - A sticky confirmation / cancel buttons appears with the number of selected slots
            - When I click on the confirm button
                - A confirmation popup appears
