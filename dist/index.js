"use strict";
var _electron = require("electron");
var _electronLog = require("electron-log");
const serve = require("electron-serve");
if (require("electron-squirrel-startup")) _electron.app.quit();
let mainWindow;
const loadURL = serve({
    directory: "dist/public"
});
function createBrowserWindow() {
    const devEnv = /electron/.test(process.argv[0]);
    if (process.platform.startsWith("win") && !devEnv && process.argv.length >= 2) {
        const filePath = process.argv[1];
        _electron.dialog.showMessageBox({
            title: "unsupported operation",
            message: "opening file with commandline arguments\nfile: " + filePath
        });
    }
    mainWindow = new _electron.BrowserWindow({
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false
        },
        show: false
    });
    mainWindow.setMenuBarVisibility(false);
    loadURL(mainWindow).then(()=>{
        _electronLog.default.info("serving static content");
    }, (err)=>{
        _electronLog.default.error(err.message);
    });
    mainWindow.on("ready-to-show", ()=>{
        mainWindow.show();
    });
}
_electron.app.on("ready", createBrowserWindow);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhcHAsIEJyb3dzZXJXaW5kb3csIGRpYWxvZyB9IGZyb20gXCJlbGVjdHJvblwiO1xyXG5jb25zdCBzZXJ2ZSA9IHJlcXVpcmUoXCJlbGVjdHJvbi1zZXJ2ZVwiKTtcclxuXHJcbmltcG9ydCBsb2cgZnJvbSBcImVsZWN0cm9uLWxvZ1wiO1xyXG5pZiAocmVxdWlyZShcImVsZWN0cm9uLXNxdWlycmVsLXN0YXJ0dXBcIikpIGFwcC5xdWl0KCk7XHJcblxyXG5sZXQgbWFpbldpbmRvdzogQnJvd3NlcldpbmRvdztcclxuXHJcbmNvbnN0IGxvYWRVUkwgPSBzZXJ2ZSh7IGRpcmVjdG9yeTogXCJkaXN0L3B1YmxpY1wiIH0pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQnJvd3NlcldpbmRvdygpIHtcclxuICBjb25zdCBkZXZFbnYgPSAvZWxlY3Ryb24vLnRlc3QocHJvY2Vzcy5hcmd2WzBdKTtcclxuICBpZiAoXHJcbiAgICBwcm9jZXNzLnBsYXRmb3JtLnN0YXJ0c1dpdGgoXCJ3aW5cIikgJiYgIWRldkVudiAmJiBwcm9jZXNzLmFyZ3YubGVuZ3RoID49IDJcclxuICApIHtcclxuICAgIGNvbnN0IGZpbGVQYXRoID0gcHJvY2Vzcy5hcmd2WzFdO1xyXG4gICAgZGlhbG9nLnNob3dNZXNzYWdlQm94KHtcclxuICAgICAgdGl0bGU6IFwidW5zdXBwb3J0ZWQgb3BlcmF0aW9uXCIsXHJcbiAgICAgIG1lc3NhZ2U6IFwib3BlbmluZyBmaWxlIHdpdGggY29tbWFuZGxpbmUgYXJndW1lbnRzXFxuZmlsZTogXCIgKyBmaWxlUGF0aCxcclxuICAgIH0pO1xyXG4gIH1cclxuICBtYWluV2luZG93ID0gbmV3IEJyb3dzZXJXaW5kb3coe1xyXG4gICAgYXV0b0hpZGVNZW51QmFyOiB0cnVlLFxyXG4gICAgd2ViUHJlZmVyZW5jZXM6IHtcclxuICAgICAgbm9kZUludGVncmF0aW9uOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzaG93OiBmYWxzZSxcclxuICB9KTtcclxuXHJcbiAgbWFpbldpbmRvdy5zZXRNZW51QmFyVmlzaWJpbGl0eShmYWxzZSk7XHJcblxyXG4gIGxvYWRVUkwobWFpbldpbmRvdykudGhlbigoKSA9PiB7XHJcbiAgICBsb2cuaW5mbyhcInNlcnZpbmcgc3RhdGljIGNvbnRlbnRcIik7XHJcbiAgfSwgKGVycjogRXJyb3IpID0+IHtcclxuICAgIGxvZy5lcnJvcihlcnIubWVzc2FnZSk7XHJcbiAgfSk7XHJcblxyXG4gIG1haW5XaW5kb3cub24oXCJyZWFkeS10by1zaG93XCIsICgpID0+IHtcclxuICAgIG1haW5XaW5kb3cuc2hvdygpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5hcHAub24oXCJyZWFkeVwiLCBjcmVhdGVCcm93c2VyV2luZG93KTtcclxuIl0sIm5hbWVzIjpbInNlcnZlIiwicmVxdWlyZSIsInF1aXQiLCJtYWluV2luZG93IiwibG9hZFVSTCIsImRpcmVjdG9yeSIsImNyZWF0ZUJyb3dzZXJXaW5kb3ciLCJkZXZFbnYiLCJ0ZXN0IiwicHJvY2VzcyIsImFyZ3YiLCJwbGF0Zm9ybSIsInN0YXJ0c1dpdGgiLCJsZW5ndGgiLCJmaWxlUGF0aCIsInNob3dNZXNzYWdlQm94IiwidGl0bGUiLCJtZXNzYWdlIiwiYXV0b0hpZGVNZW51QmFyIiwid2ViUHJlZmVyZW5jZXMiLCJub2RlSW50ZWdyYXRpb24iLCJzaG93Iiwic2V0TWVudUJhclZpc2liaWxpdHkiLCJ0aGVuIiwiaW5mbyIsImVyciIsImVycm9yIiwib24iXSwibWFwcGluZ3MiOiI7QUFBMkMsR0FBVSxDQUFWLFNBQVU7QUFHckMsR0FBYyxDQUFkLFlBQWM7QUFGOUIsS0FBSyxDQUFDQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxDQUFnQjtBQUd0QyxFQUFFLEVBQUVBLE9BQU8sQ0FBQyxDQUEyQiw2QkFKSSxTQUFVLEtBSVBDLElBQUk7QUFFbEQsR0FBRyxDQUFDQyxVQUFVO0FBRWQsS0FBSyxDQUFDQyxPQUFPLEdBQUdKLEtBQUssQ0FBQyxDQUFDO0lBQUNLLFNBQVMsRUFBRSxDQUFhO0FBQUMsQ0FBQztTQUV6Q0MsbUJBQW1CLEdBQUcsQ0FBQztJQUM5QixLQUFLLENBQUNDLE1BQU0sY0FBY0MsSUFBSSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQzdDLEVBQUUsRUFDQUQsT0FBTyxDQUFDRSxRQUFRLENBQUNDLFVBQVUsQ0FBQyxDQUFLLFVBQU1MLE1BQU0sSUFBSUUsT0FBTyxDQUFDQyxJQUFJLENBQUNHLE1BQU0sSUFBSSxDQUFDLEVBQ3pFLENBQUM7UUFDRCxLQUFLLENBQUNDLFFBQVEsR0FBR0wsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQztRQWZRLFNBQVUsUUFnQjFDSyxjQUFjLENBQUMsQ0FBQztZQUNyQkMsS0FBSyxFQUFFLENBQXVCO1lBQzlCQyxPQUFPLEVBQUUsQ0FBaUQsbURBQUdILFFBQVE7UUFDdkUsQ0FBQztJQUNILENBQUM7SUFDRFgsVUFBVSxHQUFHLEdBQUcsQ0FyQnlCLFNBQVUsZUFxQnBCLENBQUM7UUFDOUJlLGVBQWUsRUFBRSxJQUFJO1FBQ3JCQyxjQUFjLEVBQUUsQ0FBQztZQUNmQyxlQUFlLEVBQUUsS0FBSztRQUN4QixDQUFDO1FBQ0RDLElBQUksRUFBRSxLQUFLO0lBQ2IsQ0FBQztJQUVEbEIsVUFBVSxDQUFDbUIsb0JBQW9CLENBQUMsS0FBSztJQUVyQ2xCLE9BQU8sQ0FBQ0QsVUFBVSxFQUFFb0IsSUFBSSxLQUFPLENBQUM7UUE1QmxCLFlBQWMsU0E2QnRCQyxJQUFJLENBQUMsQ0FBd0I7SUFDbkMsQ0FBQyxHQUFHQyxHQUFVLEdBQUssQ0FBQztRQTlCTixZQUFjLFNBK0J0QkMsS0FBSyxDQUFDRCxHQUFHLENBQUNSLE9BQU87SUFDdkIsQ0FBQztJQUVEZCxVQUFVLENBQUN3QixFQUFFLENBQUMsQ0FBZSxvQkFBUSxDQUFDO1FBQ3BDeEIsVUFBVSxDQUFDa0IsSUFBSTtJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQXhDMEMsU0FBVSxLQTBDakRNLEVBQUUsQ0FBQyxDQUFPLFFBQUVyQixtQkFBbUIifQ==