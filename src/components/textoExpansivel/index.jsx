import React, { useState } from 'react';
import { Button, TextField, Collapse, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const TextoExpansivel = ({label, buttonName}) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleExpandClick}
      >
        {buttonName}
      </Button>
      <Collapse in={expanded}>
        <TextField
          label={label}
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          margin="normal"
        />
      </Collapse>
    </Box>
  );
};

export default TextoExpansivel;
