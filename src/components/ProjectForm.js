import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { ListGroup } from "react-bootstrap";

//Initalization of ProjectForm
class ProjectForm extends React.Component{
    constructor(){
        super()
        //Empty Array(Will be used later for displaying input)
        this.state = {
            ProjectForm: []
        }
    }
    //Method to display output from form
    addData = (event) => {
        event.preventDefault();
        const data = event.target
        //Assigning variables to form values
        const classData = {
            validInput : true,
            className : data.formClassName.value,
            classRating : data.formClassRating.value,
            classReview : data.formReview.value
        }
        //Checking if all input fields have some value
        if(data.formClassName.value.length > 0 && data.formClassRating.value.length>0 && data.formReview.value.length>0){
        this.state.ProjectForm.push(classData); // Adding form data to ProjectForm array(will be used for output)
        this.setState({ 
            ProjectForm: this.state.ProjectForm // update state
        })
        //Resetting form
        event.target.reset();
    }else{ // If there is invalid input
       const errorMsg = {
           error: "Invalid Input"
       }
       this.state.ProjectForm.push(errorMsg);
       this.setState({
           ProjectForm: this.state.ProjectForm
       })
        }

    }
    


    render(){
        console.log(this.state.ProjectForm)
        return (
            //Form Code
            <><Form onSubmit={this.addData}>
                <Form.Group className="mb-3" controlId="formClassName">
                    <Form.Label>Class Name </Form.Label>
                    <Form.Control type="text"  name="className" />
                    <Form.Text>
                        Please type in a class in the input box above. An example is ECS 36A.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId='formClassRating'>
                    <Form.Label>Overall Rating</Form.Label>
                    <Form.Select name="rating">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                    </Form.Select>
                    <Form.Text>
                        Please select a number in the box above. The default value is One.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formReview">
                    <Form.Label>Review</Form.Label>
                    <Form.Control as="textarea" rows={5} name="Review" />
                    <Form.Text>
                        Please type in a review of the class and any other comment/concerns that you had.
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <ListGroup>
               {//Outputting form results
                    this.state.ProjectForm.map((review, index) =>{
                        if(review.validInput == true){//valid input
                        return (
                            
                            <ListGroup.Item key = {index}>
                            Class Name: {review.className}  Class Rating: {review.classRating}  Class Review: {review.classReview}
                        </ListGroup.Item>
                        )}
                        else{//invalid input
                            return(
                                <ListGroup.Item key = {index}>
                                    Invalid Input!
                                </ListGroup.Item>
                            )
                        }
                    })
                }

            </ListGroup>
            </>
            
        )
    }
}

export default ProjectForm;