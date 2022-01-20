FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["ProxyDemo/ProxyDemo.csproj", "ProxyDemo/"]
RUN dotnet restore "ProxyDemo/ProxyDemo.csproj"
COPY . .
WORKDIR "/src/ProxyDemo"
RUN dotnet build "ProxyDemo.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "ProxyDemo.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "ProxyDemo.dll"]
