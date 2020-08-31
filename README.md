# Week 3 Assessment

Covers some important concepts covered in week 3

- Migrations
- API Endpoints
- Servers
- GraphQL

You will be allotted 1.5 hours for this assessment. A pull request must be made before the 1.5 hours is over.

We highly suggest looking through everything first and making sure you have enough time for each part.

## Rules

1.  **MDN and other official documentation are the only resources you are allowed.**
1.  **You are NOT allowed to look at or use any previously written code (whether by you or someone else).**
1.  **Any confusion about the requirements should be immediately reported to an instructor**
1.  Remember to give yourself a grade for each problem.
1.  Tests are optional, but highly encouraged.

## Pull Requests

When making your Pull Request, please remember to take the complete [Assessment Questions and Survey](https://forms.gle/CVgw39BKWL4tC8fn8) before submitting the PR.

Feel free to include other comments you would like.

## Requirements

1. Migrations

   - [ ] Create a database called `assessment_w3` on your local machine
   - [ ] Look into `src/ormconfig.ts`, update your database connection details if necessary.
   - [ ] Create the following schemas using migrations (Your migration files should live in `./src/migrations` and entities will be in `./src/entities`):

     ```
     -------------------
     |     authors     |
     -------------------
     | name -> string  |
     -------------------

     -----------------------------------------------
     |                   quotes                    |
     -----------------------------------------------
     | quote -> text (not nullable)                |
     | author_id -> int (reference to authors<id>) |
     ----------------------------------------------
     ```

   - [ ] Run migrations to create the schema
   - [ ] Populate your database with the seed data (hint: look in package.json for the commands)
   - [ ] On your terminal, use `psql` to connect to your `assessment_w3` database and screenshot the output of `\dt`, `SELECT * FROM authors LIMIT 3;`, and `SELECT * FROM quotes LIMIT 3;` and put all of them into `src/screenshots`. If you do not know how to take a screenshot, please ask an instructor

1. APIs

   - [ ] Finish the endpoint for GET /api/quotes
   - [ ] Modify the code in `src/routes/authors.ts` and `src/routes/quotes.ts` so that all of your tests pass. Look at the specification comment above the endpoint for instructions.

1. Questions - Server & GraphQL

   - [ ] Answer all the questions in [Assessment Questions and Survey](https://forms.gle/CVgw39BKWL4tC8fn8)

## What We Look For

Your understanding of the material will be rated through:

- the quality of your commits
- if your code works
- code style and organization
- explanations given
