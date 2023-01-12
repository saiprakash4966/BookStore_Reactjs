import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';





function Address() {

    return (
        <Paper elevation={0} className=''>

            <Box className=''>
                <Box className='' ></Box>
                <Box className=''>
                    <span style={{ font: ' normal normal medium 18px/24px Roboto', color: '#333232' }} >Customer Details</span>
                    <Button variant="outlined" sx={{
                        background: '#FFFFFF 0% 0% no-repeat padding-box', borderRadius: '2px',
                        color: '#A03037', font: 'normal normal normal 12px/16px Roboto', border: '1px solid #A03037'
                    }}>Add New address</Button>
                </Box>
                <Box className=''>
                    <TextField id="outlined-basic" label="Full Name" variant="outlined" size='small' />
                    <TextField id="outlined-basic" label="Mobile Number" variant="outlined" size='small' />
                </Box>
                <Box className=''>
                    <Box>
                        <span>Type</span>
                    </Box>
                    <Box className='' onChange=''>
                        <Box className=''>
                            <input type="radio" name="type" key="1" id="Home" value="Home" />
                            <lable style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}> Home </lable>
                        </Box>
                        <Box className=''>
                            <input type="radio" name='type' id='Office' value='Office' key="2" />
                            <lable style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}> Office</lable>
                        </Box>
                        <Box className=''>
                            <input type="radio" name='type' id='other' value='Other' key="3" />
                            <lable style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}> other </lable>
                        </Box>
                    </Box>
                    <Box className='' ></Box>
                </Box>
                <Box className=''>
                    <span style={{ font: 'normal normal medium 15px/20px Roboto', color: '#0A0102' }}>1.  </span>
                    <span style={{ font: 'normal normal medium 12px/16px Roboto', color: '#A03037', position: 'relative', left: '50px' }}>Edit</span>
                </Box>
                <Box className=''>
                    <span style={{ font: 'normal normal normal 12px/16px Roboto', color: '#0A0102' }}>Address</span>
                    <TextareaAutosize
                        onChange=''
                        aria-label="empty textarea"
                        key="7"
                        placeholder=""
                        style={{ width: 550, height: 60, background: ' #F5F5F5 0% 0% no-repeat padding-box', font: 'normal normal normal 15px/18px Roboto', color: '#0A0102' }}
                    />
                </Box>
                <Box className=''>
                    <Box className=''>
                        <span style={{ font: 'normal normal normal 12px/16px Roboto', color: '#0A0102' }}>City/Town</span>
                        <TextField onChange='' id="outlined" placeholder='' variant="outlined" size='small' key="5" style={{ background: '#F5F5F5 0% 0% no-repeat padding-box', borderRadius: '2px', font: 'normal normal normal 12px/16px Roboto' }} />
                    </Box>
                    <Box className=''>
                        <span style={{ font: 'normal normal normal 12px/16px Roboto', color: '#0A0102' }}>State</span>
                        <TextField onChange='' id="outlined" placeholder="" variant="outlined" size='small' key="6" sx={{ background: '#F5F5F5 0% 0% no-repeat padding-box', borderRadius: '2px', font: 'normal normal normal 12px/16px Roboto' }} />
                    </Box>
                </Box>


                <Box className=''>

                    <Button variant="contained" onClick='' sx={{ background: ' #3371B5 0% 0% no-repeat padding-box', borderRadius: '3px' }}>Continue</Button>


                </Box>
            </Box>
        </Paper>
    );
}

export default Address;