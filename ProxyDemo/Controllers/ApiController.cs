using Microsoft.AspNetCore.Mvc;

namespace ProxyDemo.Controllers;

[ApiController]
[Route("api")]
public class ApiController
{
    [HttpGet("demo")]
    public ActionResult<string> Get()
    {
        return "Response from dotnet application";
    }
}