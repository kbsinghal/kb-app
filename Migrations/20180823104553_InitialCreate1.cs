using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace kbapp.Migrations
{
    public partial class InitialCreate1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EventBanner");

            migrationBuilder.DropTable(
                name: "EventOrganizer");

            migrationBuilder.DropColumn(
                name: "AreaName",
                table: "Event");

            migrationBuilder.DropColumn(
                name: "CityName",
                table: "Event");

            migrationBuilder.DropColumn(
                name: "CountryName",
                table: "Event");

            migrationBuilder.DropColumn(
                name: "StateName",
                table: "Event");

            migrationBuilder.AlterColumn<int>(
                name: "IsActive",
                table: "Event",
                nullable: false,
                oldClrType: typeof(bool));

            migrationBuilder.AddColumn<int>(
                name: "CreatedBy",
                table: "Event",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedOn",
                table: "Event",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "UpdatedBy",
                table: "Event",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedOn",
                table: "Event",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.CreateTable(
                name: "Country",
                columns: table => new
                {
                    CountryID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    CountryName = table.Column<string>(nullable: true),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    UpdatedBy = table.Column<int>(nullable: false),
                    UpdatedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Country", x => x.CountryID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Country");

            migrationBuilder.DropColumn(
                name: "CreatedBy",
                table: "Event");

            migrationBuilder.DropColumn(
                name: "CreatedOn",
                table: "Event");

            migrationBuilder.DropColumn(
                name: "UpdatedBy",
                table: "Event");

            migrationBuilder.DropColumn(
                name: "UpdatedOn",
                table: "Event");

            migrationBuilder.AlterColumn<bool>(
                name: "IsActive",
                table: "Event",
                nullable: false,
                oldClrType: typeof(int));

            migrationBuilder.AddColumn<string>(
                name: "AreaName",
                table: "Event",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CityName",
                table: "Event",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "CountryName",
                table: "Event",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "StateName",
                table: "Event",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "EventBanner",
                columns: table => new
                {
                    EventBannerID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
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
                        .Annotation("MySQL:AutoIncrement", true),
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
    }
}
