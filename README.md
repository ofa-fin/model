Model for Open Financial API (FIN)
==================================

The Open Financial API is an Open Source initiative to define an Open API for interoperativity
of Financial Mangement Software in Finland.

Our goal is to define a simple and practical set of data models and APIs
that could be used by several types software to interoperate, e.g.:

- Accounting Software
- Invoicing Software
- Reporting tools and systems
- Point of Sales (POS)
- ERP solutions
- Salary payment, HRM and expense reporting

On high level, we want to provide the following set of data models:

- Invoices: Sales & Purchase
- Bank account transactions
- Salary as required in Accounting and legal reporting
- Other accounting related vouchers
- Financial reporting (Income statement, balanace sheet etc.)

All data models should be sufficient for Financial management in Finland with
Finnish legislation. They should however, only provide the minimum needed data
needed in normal usecases. Instead of providing data models for all edge cases,
the data models should be extensible, so that derived models can be created for
tools targeting the edge cases.

Founders
========

The initiative was founded and is contributed by:

- Kitsas (https://kitsas.fi/)
- Palkkaus.fi (https://www.palkkaus.fi/)
- Laskupiste (https://www.laskupiste.fi/)
- Quartal Accounting Software Oy (https://quartal.com/)

We are soon looking for new members in our group.
Please look at notices and call-for-actions in this space!

Development
===========

Install node modules:
```console
foo@bar:~$ pnpm install
```

Build:
```console
foo@bar:~$ pnpm build
```

Run:
```console
foo@bar:~$ pnpm dev
```


