using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace kbapp.Migrations
{
    public partial class InitialCreate10 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "EventVenueLongitude",
                table: "Event",
                nullable: true,
                oldClrType: typeof(float));

            migrationBuilder.AlterColumn<float>(
                name: "EventVenueLatitude",
                table: "Event",
                nullable: true,
                oldClrType: typeof(float));

            migrationBuilder.AlterColumn<TimeSpan>(
                name: "EventStartTime",
                table: "Event",
                nullable: false,
                oldClrType: typeof(DateTime));

            migrationBuilder.AlterColumn<TimeSpan>(
                name: "EventEndTime",
                table: "Event",
                nullable: true,
                oldClrType: typeof(DateTime));

            migrationBuilder.AddColumn<string>(
                name: "EventOccurence",
                table: "Event",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EventOccurence",
                table: "Event");

            migrationBuilder.AlterColumn<float>(
                name: "EventVenueLongitude",
                table: "Event",
                nullable: false,
                oldClrType: typeof(float),
                oldNullable: true);

            migrationBuilder.AlterColumn<float>(
                name: "EventVenueLatitude",
                table: "Event",
                nullable: false,
                oldClrType: typeof(float),
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "EventStartTime",
                table: "Event",
                nullable: false,
                oldClrType: typeof(TimeSpan));

            migrationBuilder.AlterColumn<DateTime>(
                name: "EventEndTime",
                table: "Event",
                nullable: false,
                oldClrType: typeof(TimeSpan),
                oldNullable: true);
        }
    }
}
