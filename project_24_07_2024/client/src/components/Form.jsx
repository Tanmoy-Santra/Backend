import React, {useState} from "react";
import { ChakraProvider } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'
  import { Button } from '@chakra-ui/react'
  import { useRef } from "react";
  import { useToast } from '@chakra-ui/react'
  import { addUser } from "../service/api.js";

const Form = () =>{

    const toast = useToast()

    const [user, setUser] = useState({
        name:'',
        mobile:'',
        image:''
    })

    const [input, setInput] = useState('')
    const [mobile, setMobile] = useState('')
    const [image,setImage] = useState('')

    const handleInputChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
        setInput(e.target.value)
        console.log(user)
    }

    const handleMobile = (e) =>{
        setUser({...user, [e.target.name] : e.target.value})
        setMobile(e.target.value)
        console.log(user)
    }

    const handleImage = (e) =>{
        setUser({...user, image: e.target.files[0]})
        console.log(user)
        setImage(e.target.file)
    }

    const isError = input === ''
    const isErrorMobile = mobile === ''
    const isErrorimage = image === ''

    const nameValid = useRef(null);
    const validMobile = useRef(null)
    const imageValid = useRef(null)

    const submitData = async(e) =>{
        e.preventDefault()
        const {name, mobile, image} = user

        if(!name){
            alert("Please Enter Your Name !")
            nameValid.current.focus()
        }else if(!mobile){
            alert("Enter Your Mobile !")
            validMobile.current.focus()
        }else if(mobile.length !== 10){
            alert("Enter 10 Digit Mobile No. !")
            validMobile.current.focus()
        }else if(!image){
            alert("Please Upload Image !")
            imageValid.current.focus()
        }else{
            const formData = new FormData()
            formData.append('image', user.image, user.image.name)
            formData.append('name', user.name)
            formData.append('mobile', user.mobile)

            const res = await addUser(formData)

            if(res.status === 201){
                toast({
                    title: res.data,
                    description: "Welcome To Our College.",
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position:'top'
                  })
                  setTimeout(function(){
                    window.location.reload();
                  }, 2000);
            }else{
                toast({
                    title: res.data,
                    description: "Try Other User",
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position:'top'
                  })
                  setTimeout(function(){
                    window.location.reload();
                  }, 2000);
            }
        }
    }

    return(
        <>
            <ChakraProvider>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3"></div>
                        <div className="col-12 col-md-6">
                            <div className="form pl-3 pr-3">
                                <h6 className="pt-3">Student Registration Form</h6><hr></hr>
                                <form>
                                    <FormControl isInvalid={isError}>
                                        <FormLabel fontSize={'14px'}>Name <sup style={{color:'red'}}><span>*</span></sup></FormLabel>
                                        <Input 
                                            type='text' 
                                            name="name"
                                            placeholder="Enter Your Name"
                                            ref={nameValid}
                                            value={input} 
                                            onChange={handleInputChange} />
                                        {!isError ? (
                                            <FormHelperText>
                                                
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl isInvalid={isErrorMobile}>
                                        <FormLabel fontSize={'14px'} mt={4}>Mobile Number <sup style={{color:'red'}}><span>*</span></sup></FormLabel>
                                        <Input 
                                            type='text' 
                                            name="mobile"
                                            placeholder="Enter Your Mobile No."
                                            ref={validMobile}
                                            value={mobile} 
                                            onChange={handleMobile} />
                                        {!isErrorMobile ? (
                                            <FormHelperText>
                                                
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <FormControl isInvalid={isErrorimage}>
                                        <FormLabel fontSize={'14px'} mt={4}>Image <sup style={{color:'red'}}><span>*</span></sup></FormLabel>
                                        <Input 
                                            type='file' 
                                            name="image"
                                            placeholder="Enter Your Mobile No."
                                            ref={imageValid}
                                            value={image} 
                                            accept=".png"
                                            pt={1}
                                            onChange={handleImage} />
                                        {!isErrorimage ? (
                                            <FormHelperText pl={1}>
                                                <span style={{color:'green'}}>Uploaded</span>
                                            </FormHelperText>
                                        ) : (
                                            <FormErrorMessage ml={1}>Field is required.</FormErrorMessage>
                                        )}
                                    </FormControl>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="d-block float-right">
                                                <Button colorScheme='red' mr={2} style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>Reset</Button>
                                                <Button onClick={submitData} colorScheme='blue' style={{boxShadow:'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}}>Submit</Button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </ChakraProvider>
        </>
    )
}

export default Form