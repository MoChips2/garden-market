import React from "react";
import Search from "../components/Search";

function Home() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1>Garden App Home Page</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt sit amet diam et ullamcorper. Curabitur vitae dolor feugiat, commodo lacus vitae, cursus ligula. Curabitur ut tristique tellus. Mauris lacus arcu, posuere vitae arcu at, mollis laoreet nunc. Donec a ipsum sit amet augue aliquet mattis ut sed nulla. Nam blandit quis velit nec suscipit. Aenean sit amet accumsan justo, vel rutrum tortor. Donec blandit venenatis purus quis suscipit. Proin vehicula mauris at lectus accumsan tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui eros, laoreet sit amet dolor ac, pretium blandit libero. Maecenas imperdiet est neque, eu vulputate lacus suscipit sit amet. Maecenas massa leo, auctor nec tellus accumsan, hendrerit sagittis eros. Proin aliquam justo sed fringilla fermentum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in dictum felis. Nunc sed justo id purus placerat fermentum. Fusce ultrices consectetur arcu, et semper sem molestie quis. Morbi in elit eget nunc sollicitudin pharetra. Suspendisse eu erat aliquet, vestibulum ante vel, volutpat metus. Cras ac est felis. Quisque quis imperdiet tortor, porttitor semper tortor. In libero nunc, vehicula quis imperdiet ut, tempus a metus. Fusce nunc felis, egestas at volutpat ac, semper non tellus. Etiam eu sapien ex.</p>
                </div>
                <div className="col-md-4">
                    <Search />
                    
                </div>
            </div>
        </div>



    )
}

export default Home;