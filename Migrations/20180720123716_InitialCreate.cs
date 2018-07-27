using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace kbapp.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Entity",
                columns: table => new
                {
                    EntityID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AreaID = table.Column<int>(nullable: false),
                    AreaName = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    EmailAddress = table.Column<string>(nullable: true),
                    EntityType = table.Column<string>(nullable: true),
                    FacebookAddress = table.Column<string>(nullable: true),
                    FirstName = table.Column<string>(nullable: true),
                    GooglePlusAddress = table.Column<string>(nullable: true),
                    IsActive = table.Column<bool>(nullable: false),
                    IsRegistered = table.Column<short>(nullable: false),
                    LastName = table.Column<string>(nullable: true),
                    Logo = table.Column<byte[]>(nullable: true),
                    MiddleName = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    NickName = table.Column<string>(nullable: true),
                    NoOfFollowers = table.Column<int>(nullable: false),
                    NoOfPastEvents = table.Column<int>(nullable: false),
                    NoOfUpcomingEvents = table.Column<int>(nullable: false),
                    RegisteredAddress = table.Column<string>(nullable: true),
                    RegisteredCity = table.Column<string>(nullable: true),
                    RegisteredCityID = table.Column<int>(nullable: false),
                    RegisteredState = table.Column<string>(nullable: true),
                    RegisteredStateID = table.Column<int>(nullable: false),
                    TwitterAddress = table.Column<string>(nullable: true),
                    UpdatedBy = table.Column<int>(nullable: false),
                    UpdatedOn = table.Column<DateTime>(nullable: false),
                    WebsiteAddress = table.Column<string>(nullable: true),
                    YouTubeAddress = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Entity", x => x.EntityID);
                });

            migrationBuilder.CreateTable(
                name: "Event",
                columns: table => new
                {
                    EventID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    AreaID = table.Column<int>(nullable: false),
                    AreaName = table.Column<string>(nullable: true),
                    CityID = table.Column<int>(nullable: false),
                    CityName = table.Column<string>(nullable: true),
                    CountryID = table.Column<int>(nullable: false),
                    CountryName = table.Column<string>(nullable: true),
                    EventAddress = table.Column<string>(nullable: true),
                    EventDescription = table.Column<string>(nullable: true),
                    EventEndDate = table.Column<DateTime>(nullable: false),
                    EventEndTime = table.Column<DateTime>(nullable: false),
                    EventName = table.Column<string>(nullable: true),
                    EventStartDate = table.Column<DateTime>(nullable: false),
                    EventStartTime = table.Column<DateTime>(nullable: false),
                    EventVenueLatitude = table.Column<float>(nullable: false),
                    EventVenueLongitude = table.Column<float>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    StateID = table.Column<int>(nullable: false),
                    StateName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Event", x => x.EventID);
                });

            migrationBuilder.CreateTable(
                name: "EventBanner",
                columns: table => new
                {
                    EventBannerID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Banner = table.Column<byte[]>(nullable: true),
                    EventID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventBanner", x => x.EventBannerID);
                    table.ForeignKey(
                        name: "FK_EventBanner_Event_EventID",
                        column: x => x.EventID,
                        principalTable: "Event",
                        principalColumn: "EventID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "EventOrganizer",
                columns: table => new
                {
                    EventOrganizerID = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    EntityID = table.Column<int>(nullable: false),
                    EventID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventOrganizer", x => x.EventOrganizerID);
                    table.ForeignKey(
                        name: "FK_EventOrganizer_Entity_EntityID",
                        column: x => x.EntityID,
                        principalTable: "Entity",
                        principalColumn: "EntityID",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_EventOrganizer_Event_EventID",
                        column: x => x.EventID,
                        principalTable: "Event",
                        principalColumn: "EventID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_EventBanner_EventID",
                table: "EventBanner",
                column: "EventID");

            migrationBuilder.CreateIndex(
                name: "IX_EventOrganizer_EntityID",
                table: "EventOrganizer",
                column: "EntityID");

            migrationBuilder.CreateIndex(
                name: "IX_EventOrganizer_EventID",
                table: "EventOrganizer",
                column: "EventID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventBanner");

            migrationBuilder.DropTable(
                name: "EventOrganizer");

            migrationBuilder.DropTable(
                name: "Entity");

            migrationBuilder.DropTable(
                name: "Event");
        }
    }
}
