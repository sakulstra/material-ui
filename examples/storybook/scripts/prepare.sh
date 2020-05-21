#!/bin/bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
cd "$parent_path"

# copy files
rm -rf ../stories/material-ui
cp -R ../../../docs/src/pages/components ../stories/material-ui

# remove unnecessary files
find ../stories/material-ui -name "*.md" -type f -delete
find ../stories/material-ui -name "*.js" -type f -delete

# rename files
find ../stories/material-ui -name "*.tsx" -exec bash -c 'mv "$1" "${1%.tsx}".stories.tsx' - '{}' \;

# alter files
npx jscodeshift -t ./csf-transform.js --extensions=ts,tsx --parser=tsx ../stories/material-ui/**/*.tsx

# remove stuff that is broken atm :)
rm ../stories/material-ui/grid/InteractiveGrid.stories.tsx # references component from docs
rm ../stories/material-ui/grid-list -rf # because i removed tile-list.js
rm ../stories/material-ui/hidden/BreakpointDown.stories.tsx # current jscodeshift breaks hoc exports like export default withWidth()(BreakpointDown);
rm ../stories/material-ui/hidden/BreakpointOnly.stories.tsx # ^^
rm ../stories/material-ui/hidden/BreakpointUp.stories.tsx # ^^
rm ../stories/material-ui/hidden/GridIntegration.stories.tsx # ^^
rm ../stories/material-ui/steppers/SwipeableTextMobileStepper.stories.tsx # export default Sth currently breaks as well
