import "@typespec/http";
import "@typespec/openapi3";
import "@typespec/versioning";
import "./models.tsp";
import "./partners.tsp";
import "./entry.tsp";

using TypeSpec.Http;
using TypeSpec.OpenAPI;
using TypeSpec.Versioning;
using FinancialAPI.Partners;


@service({
  title: "Model for Open Financial API (FIN)",
  description: "Open Financial API (FIN) is a RESTful API for financial services.",
  contact: {
    name: "OFA-FIN API Support (EI TOIMI)",
    email: "info@ofafin.fi"
  },
  license: {
    name: "Apache 2.0",
    url: "https://www.apache.org/licenses/LICENSE-2.0.html",
  }
})
@versioned(Versions)
@server("https://api.example.com", "API Test endpoint")
@summary("Open Financial API (FIN) is a RESTful API for financial services.")
@doc("Open Financial API (FIN) is a RESTful API for financial services. It provides a way to manage bank accounts, transactions, and partners.")
@route("/api/v1")
namespace FinancialAPI;

enum Versions {
  v1: "1.0",
}
