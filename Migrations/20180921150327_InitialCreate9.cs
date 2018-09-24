using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace kbapp.Migrations
{
    public partial class InitialCreate9 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UserID",
                table: "User",
                newName: "UID");

            migrationBuilder.AlterColumn<short>(
                name: "IsActive",
                table: "Entity",
                nullable: false,
                oldClrType: typeof(bool));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UID",
                table: "User",
                newName: "UserID");

            migrationBuilder.AlterColumn<bool>(
                name: "IsActive",
                table: "Entity",
                nullable: false,
                oldClrType: typeof(short));
        }
    }
}
