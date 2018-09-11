using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace kbapp.Migrations
{
    public partial class InitialCreate3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AreaName",
                table: "Entity");

            migrationBuilder.DropColumn(
                name: "RegisteredCity",
                table: "Entity");

            migrationBuilder.DropColumn(
                name: "RegisteredState",
                table: "Entity");

            migrationBuilder.RenameColumn(
                name: "AreaID",
                table: "Entity",
                newName: "RegisteredCountryID");

            migrationBuilder.AddColumn<int>(
                name: "RegisteredAreaID",
                table: "Entity",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "Area",
                columns: table => new
                {
                    AreaID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    AreaName = table.Column<string>(nullable: true),
                    CityID = table.Column<int>(nullable: false),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    UpdatedBy = table.Column<int>(nullable: false),
                    UpdatedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Area", x => x.AreaID);
                });

            migrationBuilder.CreateTable(
                name: "EventOrganizer",
                columns: table => new
                {
                    EventOrganizerID = table.Column<int>(nullable: false)
                        .Annotation("MySQL:AutoIncrement", true),
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    EntityID = table.Column<int>(nullable: false),
                    EventID = table.Column<int>(nullable: false),
                    UpdatedBy = table.Column<int>(nullable: false),
                    UpdatedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EventOrganizer", x => x.EventOrganizerID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Area");

            migrationBuilder.DropTable(
                name: "EventOrganizer");

            migrationBuilder.DropColumn(
                name: "RegisteredAreaID",
                table: "Entity");

            migrationBuilder.RenameColumn(
                name: "RegisteredCountryID",
                table: "Entity",
                newName: "AreaID");

            migrationBuilder.AddColumn<string>(
                name: "AreaName",
                table: "Entity",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RegisteredCity",
                table: "Entity",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "RegisteredState",
                table: "Entity",
                nullable: true);
        }
    }
}
