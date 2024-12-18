//Variables used in creating license section
let licenseBadge = "";
let licenseLink = "";
const today = new Date();

//Generates the README on the inputs in questionInput()
function generateMarkdown(data) {
  console.log(data.license);
  if(data.license == 'none') {
  return `# ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)

  ## Installation

  To install the project, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`
    
  ## Usage

  ![alt text](${data.usage})

  ## Tests

  ${data.tests}

  ## Contributing

  ${data.contribution}

  ## Questions

  If you have any questions, contact this GitHub Profile: [${data.userName}](https://github.com/${data.userName}).
    
  Or you can contact this email for further questions: [${data.email}](${data.email})
  
  ## License

  This project doesn't have a current license
  
  `;
  } else {
  return `# ${data.title}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [License](#license)
  
  ## Installation
  
  To install the project, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`
      
  ## Usage
  
  ![alt text](${data.usage})
  
  ## Tests
  
  ${data.tests}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Questions
  
  If you have any questions, contact this GitHub Profile: [${data.userName}](https://github.com/${data.userName}).
      
  Or you can contact this email for further questions: [${data.email}](${data.email})
      
  ## License

  ${renderLicenseSection(data.license, data.userName)}
  `;
  }
}

//Creates a License Badge based on the selected license option in questionInput()
function renderLicenseBadge(license) {
  if (license == "None"){
    return '';
  } else if (license == "Apache License 2.0"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license == 'GNU General Public License v3.0'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license == 'MIT License'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license == 'BSD 2-Clause "Simplified" License'){
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  } else if (license == 'BSD 3-Clause "New" or "Revised" License'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (license == 'Boost Software License 1.0'){
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license == 'Creative Commons Zero v1.0 Universal'){
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license == 'Eclipse Public License 2.0'){
    return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  } else if (license == 'GNU Affero General Public License v3.0'){
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  } else if (license == 'GNU General Public License v2.0'){
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license == 'GNU Lesser General Public License v3.0'){
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  } else if (license == 'Mozilla Public License 2.0'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  } else if (license == 'The Unlicense'){
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

//Creates a license link depending on the selected license in questionInput()
function renderLicenseLink(license) {
  if (license == "None"){
    return '';
  } else if (license == "Apache License 2.0"){
    return `[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)`;
  } else if (license == 'GNU General Public License v3.0'){
    return `[https://www.gnu.org/licenses/gpl-3.0.en.html#license-text](https://www.gnu.org/licenses/gpl-3.0.en.html#license-text)`;
  } else if (license == 'MIT License'){
    return `[https://spdx.org/licenses/MIT.html](https://spdx.org/licenses/MIT.html)`;
  } else if (license == 'BSD 2-Clause "Simplified" License'){
    return `[https://opensource.org/license/bsd-2-clause](https://opensource.org/license/bsd-2-clause)`;
  } else if (license == 'BSD 3-Clause "New" or "Revised" License'){
    return `[https://opensource.org/license/bsd-3-clause](https://opensource.org/license/bsd-3-clause)`;
  } else if (license == 'Boost Software License 1.0'){
    return `[https://www.boost.org/LICENSE_1_0.txt](https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (license == 'Creative Commons Zero v1.0 Universal'){
    return `[https://creativecommons.org/publicdomain/zero/1.0/](https://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (license == 'Eclipse Public License 2.0'){
    return `[https://opensource.org/license/EPL-1.0](https://opensource.org/license/EPL-1.0)`;
  } else if (license == 'GNU Affero General Public License v3.0'){
    return `[https://www.gnu.org/licenses/agpl-3.0.en.html](https://www.gnu.org/licenses/agpl-3.0.en.html)`;
  } else if (license == 'GNU General Public License v2.0'){
    return `[https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license == 'GNU Lesser General Public License v3.0'){
    return `[https://www.gnu.org/licenses/lgpl-3.0.en.html](https://www.gnu.org/licenses/lgpl-3.0.en.html)`;
  } else if (license == 'Mozilla Public License 2.0'){
    return `[https://opensource.org/license/MPL-2.0](https://opensource.org/license/MPL-2.0)`;
  } else if (license == 'The Unlicense'){
    return `[https://unlicense.org/](https://unlicense.org/)`;
  }

}

//Creates the License section of the README depending on the selected option in questionInput()
function renderLicenseSection(license, userName) {
  if (license == 'None'){
    return '';
  } else if (license == 'Apache License 2.0'){
  licenseBadge = 'Apache License 2.0';
  licenseLink = 'Apache License 2.0';
  return `
  ${renderLicenseBadge(license)}
  
  Copyright ${today.getFullYear()} ${userName}
  
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  ${renderLicenseLink(license)}

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  `;
  } else if (license == 'GNU General Public License v3.0'){
  return `
  ${renderLicenseBadge(license)}
  
  Copyright (C) ${today.getFullYear()} ${userName}

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program.  If not, see ${renderLicenseLink(license)}
  `;
  } else if (license == 'MIT License'){
  return `
  ${renderLicenseBadge(license)}
  
  MIT License

  Copyright (c) ${today.getFullYear()} ${userName}

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

  ${renderLicenseLink(license)}
  `;
  } else if (license == 'BSD 2-Clause "Simplified" License'){
  return `
  ${renderLicenseBadge(license)}
  
  Copyright ${today.getFullYear()} ${userName}

  Redistribution and use in source and binary forms, with or without modification, are 
  permitted provided that the following conditions are met:

  1. Redistributions of source code must retain the above copyright notice, this list of 
  conditions and the following disclaimer.

  2. Redistributions in binary form must reproduce the above copyright notice, this list of 
  conditions and the following disclaimer in the documentation and/or other materials 
  provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 
  “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED 
  TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A 
  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT 
  HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY 
  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 
  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

  ${renderLicenseLink(license)}
  `;
  } else if (license == 'BSD 3-Clause "New" or "Revised" License'){
  return `
  ${renderLicenseBadge(license)}
  
  Copyright ${today.getFullYear()} ${userName}

  Redistribution and use in source and binary forms, with or without modification, are 
  permitted provided that the following conditions are met:

  1. Redistributions of source code must retain the above copyright notice, this list of 
  conditions and the following disclaimer.

  2. Redistributions in binary form must reproduce the above copyright notice, this list of 
  conditions and the following disclaimer in the documentation and/or other materials 
  provided with the distribution.

  3. Neither the name of the copyright holder nor the names of its contributors may be 
  used to endorse or promote products derived from this software without specific prior 
  written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 
  “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, 
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A 
  PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT 
  HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, 
  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT 
  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, 
  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY 
  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT 
  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE 
  OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

  ${renderLicenseLink(license)}
  `;
  } else if (license == 'Boost Software License 1.0'){
  return `
  ${renderLicenseBadge(license)}
  
  Boost Software License - Version 1.0 - August 17th, 2003

  Permission is hereby granted, free of charge, to any person or organization
  obtaining a copy of the software and accompanying documentation covered by
  this license (the "Software") to use, reproduce, display, distribute,
  execute, and transmit the Software, and to prepare derivative works of the
  Software, and to permit third-parties to whom the Software is furnished to
  do so, all subject to the following:

  The copyright notices in the Software and this entire statement, including
  the above license grant, this restriction and the following disclaimer,
  must be included in all copies of the Software, in whole or in part, and
  all derivative works of the Software, unless such copies or derivative
  works are solely in the form of machine-executable object code generated by
  a source language processor.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
  SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
  FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
  DEALINGS IN THE SOFTWARE.
  ${renderLicenseLink(license)}
  `;
  } else if (license == 'Creative Commons Zero v1.0 Universal'){
  return `
  ${renderLicenseBadge(license)}
  
  Creative Commons Legal Code

  CC0 1.0 Universal

  CREATIVE COMMONS CORPORATION IS NOT A LAW FIRM AND DOES NOT PROVIDE
  LEGAL SERVICES. DISTRIBUTION OF THIS DOCUMENT DOES NOT CREATE AN
  ATTORNEY-CLIENT RELATIONSHIP. CREATIVE COMMONS PROVIDES THIS
  INFORMATION ON AN "AS-IS" BASIS. CREATIVE COMMONS MAKES NO WARRANTIES
  REGARDING THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS
  PROVIDED HEREUNDER, AND DISCLAIMS LIABILITY FOR DAMAGES RESULTING FROM
  THE USE OF THIS DOCUMENT OR THE INFORMATION OR WORKS PROVIDED
  HEREUNDER.

  Statement of Purpose

  The laws of most jurisdictions throughout the world automatically confer
  exclusive Copyright and Related Rights (defined below) upon the creator
  and subsequent owner(s) (each and all, an "owner") of an original work of
  authorship and/or a database (each, a "Work").

  Certain owners wish to permanently relinquish those rights to a Work for
  the purpose of contributing to a commons of creative, cultural and
  scientific works ("Commons") that the public can reliably and without fear
  of later claims of infringement build upon, modify, incorporate in other
  works, reuse and redistribute as freely as possible in any form whatsoever
  and for any purposes, including without limitation commercial purposes.
  These owners may contribute to the Commons to promote the ideal of a free
  culture and the further production of creative, cultural and scientific
  works, or to gain reputation or greater distribution for their Work in
  part through the use and efforts of others.

  For these and/or other purposes and motivations, and without any
  expectation of additional consideration or compensation, the person
  associating CC0 with a Work (the "Affirmer"), to the extent that he or she
  is an owner of Copyright and Related Rights in the Work, voluntarily
  elects to apply CC0 to the Work and publicly distribute the Work under its
  terms, with knowledge of his or her Copyright and Related Rights in the
  Work and the meaning and intended legal effect of CC0 on those rights.

  1. Copyright and Related Rights. A Work made available under CC0 may be
  protected by copyright and related or neighboring rights ("Copyright and
  Related Rights"). Copyright and Related Rights include, but are not
  limited to, the following:

    i. the right to reproduce, adapt, distribute, perform, display,
    communicate, and translate a Work;
    ii. moral rights retained by the original author(s) and/or performer(s);
    iii. publicity and privacy rights pertaining to a person's image or
    likeness depicted in a Work;
    iv. rights protecting against unfair competition in regards to a Work,
    subject to the limitations in paragraph 4(a), below;
    v. rights protecting the extraction, dissemination, use and reuse of data
    in a Work;
    vi. database rights (such as those arising under Directive 96/9/EC of the
    European Parliament and of the Council of 11 March 1996 on the legal
    protection of databases, and under any national implementation
    thereof, including any amended or successor version of such
    directive); and
    vii. other similar, equivalent or corresponding rights throughout the
    world based on applicable law or treaty, and any national
    implementations thereof.

  2. Waiver. To the greatest extent permitted by, but not in contravention
  of, applicable law, Affirmer hereby overtly, fully, permanently,
  irrevocably and unconditionally waives, abandons, and surrenders all of
  Affirmer's Copyright and Related Rights and associated claims and causes
  of action, whether now known or unknown (including existing as well as
  future claims and causes of action), in the Work (i) in all territories
  worldwide, (ii) for the maximum duration provided by applicable law or
  treaty (including future time extensions), (iii) in any current or future
  medium and for any number of copies, and (iv) for any purpose whatsoever,
  including without limitation commercial, advertising or promotional
  purposes (the "Waiver"). Affirmer makes the Waiver for the benefit of each
  member of the public at large and to the detriment of Affirmer's heirs and
  successors, fully intending that such Waiver shall not be subject to
  revocation, rescission, cancellation, termination, or any other legal or
  equitable action to disrupt the quiet enjoyment of the Work by the public
  as contemplated by Affirmer's express Statement of Purpose.

  3. Public License Fallback. Should any part of the Waiver for any reason
  be judged legally invalid or ineffective under applicable law, then the
  Waiver shall be preserved to the maximum extent permitted taking into
  account Affirmer's express Statement of Purpose. In addition, to the
  extent the Waiver is so judged Affirmer hereby grants to each affected
  person a royalty-free, non transferable, non sublicensable, non exclusive,
  irrevocable and unconditional license to exercise Affirmer's Copyright and
  Related Rights in the Work (i) in all territories worldwide, (ii) for the
  maximum duration provided by applicable law or treaty (including future
  time extensions), (iii) in any current or future medium and for any number
  of copies, and (iv) for any purpose whatsoever, including without
  limitation commercial, advertising or promotional purposes (the
  "License"). The License shall be deemed effective as of the date CC0 was
  applied by Affirmer to the Work. Should any part of the License for any
  reason be judged legally invalid or ineffective under applicable law, such
  partial invalidity or ineffectiveness shall not invalidate the remainder
  of the License, and in such case Affirmer hereby affirms that he or she
  will not (i) exercise any of his or her remaining Copyright and Related
  Rights in the Work or (ii) assert any associated claims and causes of
  action with respect to the Work, in either case contrary to Affirmer's
  express Statement of Purpose.

  4. Limitations and Disclaimers.

    a. No trademark or patent rights held by Affirmer are waived, abandoned,
    surrendered, licensed or otherwise affected by this document.
    b. Affirmer offers the Work as-is and makes no representations or
    warranties of any kind concerning the Work, express, implied,
    statutory or otherwise, including without limitation warranties of
    title, merchantability, fitness for a particular purpose, non
    infringement, or the absence of latent or other defects, accuracy, or
    the present or absence of errors, whether or not discoverable, all to
    the greatest extent permissible under applicable law.
    c. Affirmer disclaims responsibility for clearing rights of other persons
    that may apply to the Work or any use thereof, including without
    limitation any person's Copyright and Related Rights in the Work.
    Further, Affirmer disclaims responsibility for obtaining any necessary
    consents, permissions or other rights required for any use of the
    Work.
    d. Affirmer understands and acknowledges that Creative Commons is not a
    party to this document and has no duty or obligation with respect to
    this CC0 or use of the Work.
  ${renderLicenseLink(license)}
  `;
  } else if (license == 'Eclipse Public License 2.0'){
  return `
  ${renderLicenseBadge(license)}
  
  THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE 
  PUBLIC LICENSE (“AGREEMENT”). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE 
  PROGRAM CONSTITUTES RECIPIENT’S ACCEPTANCE OF THIS AGREEMENT.

  1. DEFINITIONS

  “Contribution” means:

  a) in the case of the initial Contributor, the initial code and documentation distributed under 
  this Agreement, and

  b) in the case of each subsequent Contributor:

  i) changes to the Program, and

  ii) additions to the Program;

  where such changes and/or additions to the Program originate from and are distributed by 
  that particular Contributor. A Contribution ‘originates’ from a Contributor if it was added to 
  the Program by such Contributor itself or anyone acting on such Contributor’s behalf. 
  Contributions do not include additions to the Program which: (i) are separate modules of 
  software distributed in conjunction with the Program under their own license agreement, 
  and (ii) are not derivative works of the Program.

  “Contributor” means any person or entity that distributes the Program.

  “Licensed Patents ” mean patent claims licensable by a Contributor which are necessarily 
  infringed by the use or sale of its Contribution alone or when combined with the Program.

  “Program” means the Contributions distributed in accordance with this Agreement.

  “Recipient” means anyone who receives the Program under this Agreement, including all 
  Contributors.

  2. GRANT OF RIGHTS

  a) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-
  exclusive, worldwide, royalty-free copyright license to reproduce, prepare derivative works 
  of, publicly display, publicly perform, distribute and sublicense the Contribution of such 
  Contributor, if any, and such derivative works, in source code and object code form.

  b) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-
  exclusive, worldwide, royalty-free patent license under Licensed Patents to make, use, sell, 
  offer to sell, import and otherwise transfer the Contribution of such Contributor, if any, in 
  source code and object code form. This patent license shall apply to the combination of the 
  Contribution and the Program if, at the time the Contribution is added by the Contributor, 
  such addition of the Contribution causes such combination to be covered by the Licensed 
  Patents. The patent license shall not apply to any other combinations which include the 
  Contribution. No hardware per se is licensed hereunder.

  c) Recipient understands that although each Contributor grants the licenses to its 
  Contributions set forth herein, no assurances are provided by any Contributor that the 
  Program does not infringe the patent or other intellectual property rights of any other 
  entity. Each Contributor disclaims any liability to Recipient for claims brought by any other 
  entity based on infringement of intellectual property rights or otherwise. As a condition to 
  exercising the rights and licenses granted hereunder, each Recipient hereby assumes sole 
  responsibility to secure any other intellectual property rights needed, if any. For example, if 
  a third party patent license is required to allow Recipient to distribute the Program, it is 
  Recipient’s responsibility to acquire that license before distributing the Program.

  d) Each Contributor represents that to its knowledge it has sufficient copyright rights in its 
  Contribution, if any, to grant the copyright license set forth in this Agreement.

  3. REQUIREMENTS

  A Contributor may choose to distribute the Program in object code form under its own 
  license agreement, provided that:

  a) it complies with the terms and conditions of this Agreement; and

  b) its license agreement:

  i) effectively disclaims on behalf of all Contributors all warranties and conditions, express 
  and implied, including warranties or conditions of title and non-infringement, and implied 
  warranties or conditions of merchantability and fitness for a particular purpose;

  ii) effectively excludes on behalf of all Contributors all liability for damages, including direct, 
  indirect, special, incidental and consequential damages, such as lost profits;

  iii) states that any provisions which differ from this Agreement are offered by that 
  Contributor alone and not by any other party; and

  iv) states that source code for the Program is available from such Contributor, and informs 
  licensees how to obtain it in a reasonable manner on or through a medium customarily used 
  for software exchange.

  When the Program is made available in source code form:

  a) it must be made available under this Agreement; and

  b) a copy of this Agreement must be included with each copy of the Program.

  Contributors may not remove or alter any copyright notices contained within the Program.

  Each Contributor must identify itself as the originator of its Contribution, if any, in a manner 
  that reasonably allows subsequent Recipients to identify the originator of the Contribution.

  4. COMMERCIAL DISTRIBUTION

  Commercial distributors of software may accept certain responsibilities with respect to end 
  users, business partners and the like. While this license is intended to facilitate the 
  commercial use of the Program, the Contributor who includes the Program in a commercial 
  product offering should do so in a manner which does not create potential liability for other 
  Contributors. Therefore, if a Contributor includes the Program in a commercial product 
  offering, such Contributor (“Commercial Contributor”) hereby agrees to defend and 
  indemnify every other Contributor (“Indemnified Contributor”) against any losses, damages 
  and costs (collectively “Losses”) arising from claims, lawsuits and other legal actions 
  brought by a third party against the Indemnified Contributor to the extent caused by the 
  acts or omissions of such Commercial Contributor in connection with its distribution of the 
  Program in a commercial product offering. The obligations in this section do not apply to 
  any claims or Losses relating to any actual or alleged intellectual property infringement. In 
  order to qualify, an Indemnified Contributor must: a) promptly notify the Commercial 
  Contributor in writing of such claim, and b) allow the Commercial Contributor to control, and 
  cooperate with the Commercial Contributor in, the defense and any related settlement 
  negotiations. The Indemnified Contributor may participate in any such claim at its own 
  expense.

  For example, a Contributor might include the Program in a commercial product offering, 
  Product X. That Contributor is then a Commercial Contributor. If that Commercial 
  Contributor then makes performance claims, or offers warranties related to Product X, 
  those performance claims and warranties are such Commercial Contributor’s responsibility 
  alone. Under this section, the Commercial Contributor would have to defend claims against 
  the other Contributors related to those performance claims and warranties, and if a court 
  requires any other Contributor to pay any damages as a result, the Commercial Contributor 
  must pay those damages.

  5. NO WARRANTY

  EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE PROGRAM IS PROVIDED 
  ON AN “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER 
  EXPRESS OR IMPLIED INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR 
  CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A 
  PARTICULAR PURPOSE. Each Recipient is solely responsible for determining the 
  appropriateness of using and distributing the Program and assumes all risks associated 
  with its exercise of rights under this Agreement , including but not limited to the risks and 
  costs of program errors, compliance with applicable laws, damage to or loss of data, 
  programs or equipment, and unavailability or interruption of operations.

  6. DISCLAIMER OF LIABILITY

  EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER RECIPIENT NOR 
  ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, 
  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING 
  WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF 
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING 
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR 
  DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED 
  HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

  7. GENERAL

  If any provision of this Agreement is invalid or unenforceable under applicable law, it shall 
  not affect the validity or enforceability of the remainder of the terms of this Agreement, and 
  without further action by the parties hereto, such provision shall be reformed to the 
  minimum extent necessary to make such provision valid and enforceable.

  If Recipient institutes patent litigation against any entity (including a cross-claim or 
  counterclaim in a lawsuit) alleging that the Program itself (excluding combinations of the 
  Program with other software or hardware) infringes such Recipient’s patent(s), then such 
  Recipient’s rights granted under Section 2(b) shall terminate as of the date such litigation is filed.

  All Recipient’s rights under this Agreement shall terminate if it fails to comply with any of 
  the material terms or conditions of this Agreement and does not cure such failure in a 
  reasonable period of time after becoming aware of such noncompliance. If all Recipient’s 
  rights under this Agreement terminate, Recipient agrees to cease use and distribution of 
  the Program as soon as reasonably practicable. However, Recipient’s obligations under this 
  Agreement and any licenses granted by Recipient relating to the Program shall continue 
  and survive.

  Everyone is permitted to copy and distribute copies of this Agreement, but in order to avoid 
  inconsistency the Agreement is copyrighted and may only be modified in the following 
  manner. The Agreement Steward reserves the right to publish new versions (including 
  revisions) of this Agreement from time to time. No one other than the Agreement Steward 
  has the right to modify this Agreement. The Eclipse Foundation is the initial Agreement 
  Steward. The Eclipse Foundation may assign the responsibility to serve as the Agreement 
  Steward to a suitable separate entity. Each new version of the Agreement will be given a 
  distinguishing version number. The Program (including Contributions) may always be 
  distributed subject to the version of the Agreement under which it was received. In addition, 
  after a new version of the Agreement is published, Contributor may elect to distribute the 
  Program (including its Contributions) under the new version. Except as expressly stated in 
  Sections 2(a) and 2(b) above, Recipient receives no rights or licenses to the intellectual 
  property of any Contributor under this Agreement, whether expressly, by implication, 
  estoppel or otherwise. All rights in the Program not expressly granted under this 
  Agreement are reserved.

  This Agreement is governed by the laws of the State of New York and the intellectual 
  property laws of the United States of America. No party to this Agreement will bring a legal 
  action under this Agreement more than one year after the cause of action arose. Each party 
  waives its rights to a jury trial in any resulting litigation.
        
  ${renderLicenseLink(license)}
  `;
  } else if (license == 'GNU Affero General Public License v3.0'){
  return`
  ${renderLicenseBadge(license)}
    
  Copyright (C) ${today.getFullYear()} ${userName}

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU Affero General Public License as
  published by the Free Software Foundation, either version 3 of the
  License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU Affero General Public License for more details.

  You should have received a copy of the GNU Affero General Public License
  along with this program.  If not, see ${renderLicenseLink(license)}.
  `;
  } else if (license == 'GNU General Public License v2.0'){
  return `
  ${renderLicenseBadge(license)}
        
  Copyright (C) ${today.getFullYear()} ${userName}

  This program is free software; you can redistribute it and/or
  modify it under the terms of the GNU General Public License
  as published by the Free Software Foundation; either version 2
  of the License, or (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, see
  ${renderLicenseLink(license)}
  `;
  } else if (license == 'GNU Lesser General Public License v3.0'){
  return `
  ${renderLicenseBadge(license)}
      
  Copyright © 2007 Free Software Foundation, Inc. <https://fsf.org/>

  Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not 
  allowed.

  This version of the GNU Lesser General Public License incorporates the terms and conditions of version 3 of 
  the GNU General Public License, supplemented by the additional permissions listed below.

  0. Additional Definitions.
  As used herein, “this License” refers to version 3 of the GNU Lesser General Public License, and the “GNU 
  GPL” refers to version 3 of the GNU General Public License.

  “The Library” refers to a covered work governed by this License, other than an Application or a Combined 
  Work as defined below.

  An “Application” is any work that makes use of an interface provided by the Library, but which is not otherwise 
  based on the Library. Defining a subclass of a class defined by the Library is deemed a mode of using an 
  interface provided by the Library.

  A “Combined Work” is a work produced by combining or linking an Application with the Library. The 
  particular version of the Library with which the Combined Work was made is also called the “Linked Version”.

  The “Minimal Corresponding Source” for a Combined Work means the Corresponding Source for the 
  Combined Work, excluding any source code for portions of the Combined Work that, considered in isolation, 
  are based on the Application, and not on the Linked Version.

  The “Corresponding Application Code” for a Combined Work means the object code and/or source code for the 
  Application, including any data and utility programs needed for reproducing the Combined Work from the 
  Application, but excluding the System Libraries of the Combined Work.

  1. Exception to Section 3 of the GNU GPL.
  You may convey a covered work under sections 3 and 4 of this License without being bound by section 3 of the 
  GNU GPL.

  2. Conveying Modified Versions.
  If you modify a copy of the Library, and, in your modifications, a facility refers to a function or data to be 
  supplied by an Application that uses the facility (other than as an argument passed when the facility is invoked), 
  then you may convey a copy of the modified version:

    a) under this License, provided that you make a good faith effort to ensure that, in the event an 
    Application does not supply the function or data, the facility still operates, and performs whatever part of 
    its purpose remains meaningful, or
    b) under the GNU GPL, with none of the additional permissions of this License applicable to that copy.

  3. Object Code Incorporating Material from Library Header Files.
  The object code form of an Application may incorporate material from a header file that is part of the Library. 
  You may convey such object code under terms of your choice, provided that, if the incorporated material is not 
  limited to numerical parameters, data structure layouts and accessors, or small macros, inline functions and 
  templates (ten or fewer lines in length), you do both of the following:

    a) Give prominent notice with each copy of the object code that the Library is used in it and that the 
    Library and its use are covered by this License.
    b) Accompany the object code with a copy of the GNU GPL and this license document.
        
  4. Combined Works.
  You may convey a Combined Work under terms of your choice that, taken together, effectively do not restrict 
  modification of the portions of the Library contained in the Combined Work and reverse engineering for 
  debugging such modifications, if you also do each of the following:

    a) Give prominent notice with each copy of the Combined Work that the Library is used in it and that the 
    Library and its use are covered by this License.
    b) Accompany the Combined Work with a copy of the GNU GPL and this license document.
    c) For a Combined Work that displays copyright notices during execution, include the copyright notice for 
    the Library among these notices, as well as a reference directing the user to the copies of the GNU GPL 
    and this license document.
    d) Do one of the following:
      0) Convey the Minimal Corresponding Source under the terms of this License, and the 
      Corresponding Application Code in a form suitable for, and under terms that permit, the user to 
      recombine or relink the Application with a modified version of the Linked Version to produce a 
      modified Combined Work, in the manner specified by section 6 of the GNU GPL for conveying 
      Corresponding Source.
      1) Use a suitable shared library mechanism for linking with the Library. A suitable mechanism is one 
      that (a) uses at run time a copy of the Library already present on the user's computer system, and (b) 
      will operate properly with a modified version of the Library that is interface-compatible with the 
      Linked Version.
    e) Provide Installation Information, but only if you would otherwise be required to provide such 
    information under section 6 of the GNU GPL, and only to the extent that such information is necessary to 
    install and execute a modified version of the Combined Work produced by recombining or relinking the 
    Application with a modified version of the Linked Version. (If you use option 4d0, the Installation 
    Information must accompany the Minimal Corresponding Source and Corresponding Application Code. If 
    you use option 4d1, you must provide the Installation Information in the manner specified by section 6 of the 
    GNU GPL for conveying Corresponding Source.)

  5. Combined Libraries.
  You may place library facilities that are a work based on the Library side by side in a single library together 
  with other library facilities that are not Applications and are not covered by this License, and convey such a 
  combined library under terms of your choice, if you do both of the following:

    a) Accompany the combined library with a copy of the same work based on the Library, uncombined with 
    any other library facilities, conveyed under the terms of this License.
    b) Give prominent notice with the combined library that part of it is a work based on the Library, and 
    explaining where to find the accompanying uncombined form of the same work.
        
  6. Revised Versions of the GNU Lesser General Public License.
  The Free Software Foundation may publish revised and/or new versions of the GNU Lesser General Public 
  License from time to time. Such new versions will be similar in spirit to the present version, but may differ in 
  detail to address new problems or concerns.

  Each version is given a distinguishing version number. If the Library as you received it specifies that a certain 
  numbered version of the GNU Lesser General Public License “or any later version” applies to it, you have the 
  option of following the terms and conditions either of that published version or of any later version published by 
  the Free Software Foundation. If the Library as you received it does not specify a version number of the GNU 
  Lesser General Public License, you may choose any version of the GNU Lesser General Public License ever 
  published by the Free Software Foundation.

  If the Library as you received it specifies that a proxy can decide whether future versions of the GNU Lesser 
  General Public License shall apply, that proxy's public statement of acceptance of any version is permanent 
  authorization for you to choose that version for the Library
  ${renderLicenseLink(license)}
  `;
  } else if (license == 'Mozilla Public License 2.0'){
  return `
  ${renderLicenseBadge(license)}
  
  1. Definitions
  1.1. “Contributor”
  means each individual or legal entity that creates, contributes to the creation of, or owns 
  Covered Software.

  1.2. “Contributor Version”
  means the combination of the Contributions of others (if any) used by a Contributor and 
  that particular Contributor’s Contribution.

  1.3. “Contribution”
  means Covered Software of a particular Contributor.

  1.4. “Covered Software”
  means Source Code Form to which the initial Contributor has attached the notice in 
  Exhibit A, the Executable Form of such Source Code Form, and Modifications of such 
  Source Code Form, in each case including portions thereof.

  1.5. “Incompatible With Secondary Licenses”
  means

    a. that the initial Contributor has attached the notice described in Exhibit B to the 
    Covered Software; or

    b. that the Covered Software was made available under the terms of version 1.1 or 
    earlier of the License, but not also under the terms of a Secondary License.

  1.6. “Executable Form”
  means any form of the work other than Source Code Form.

  1.7. “Larger Work”
  means a work that combines Covered Software with other material, in a separate file or 
  files, that is not Covered Software.

  1.8. “License”
  means this document.

  1.9. “Licensable”
  means having the right to grant, to the maximum extent possible, whether at the time of 
  the initial grant or subsequently, any and all of the rights conveyed by this License.

  1.10. “Modifications”
  means any of the following:

  any file in Source Code Form that results from an addition to, deletion from, or 
  modification of the contents of Covered Software; or

  any new file in Source Code Form that contains any Covered Software.

  1.11. “Patent Claims” of a Contributor
  means any patent claim(s), including without limitation, method, process, and apparatus 
  claims, in any patent Licensable by such Contributor that would be infringed, but for the 
  grant of the License, by the making, using, selling, offering for sale, having made, import, 
  or transfer of either its Contributions or its Contributor Version.

  1.12. “Secondary License”
  means either the GNU General Public License, Version 2.0, the GNU Lesser General 
  Public License, Version 2.1, the GNU Affero General Public License, Version 3.0, or any 
  later versions of those licenses.

  1.13. “Source Code Form”
  means the form of the work preferred for making modifications.

  1.14. “You” (or “Your”)
  means an individual or a legal entity exercising rights under this License. For legal 
  entities, “You” includes any entity that controls, is controlled by, or is under common 
  control with You. For purposes of this definition, “control” means (a) the power, direct or 
  indirect, to cause the direction or management of such entity, whether by contract or 
  otherwise, or (b) ownership of more than fifty percent (50%) of the outstanding shares 
  or beneficial ownership of such entity.

  2. License Grants and Conditions
  2.1. Grants
  Each Contributor hereby grants You a world-wide, royalty-free, non-exclusive license:

    a. under intellectual property rights (other than patent or trademark) Licensable by 
    such Contributor to use, reproduce, make available, modify, display, perform, 
    distribute, and otherwise exploit its Contributions, either on an unmodified basis, 
    with Modifications, or as part of a Larger Work; and

    b. under Patent Claims of such Contributor to make, use, sell, offer for sale, have 
    made, import, and otherwise transfer either its Contributions or its Contributor 
    Version.

  2.2. Effective Date
  The licenses granted in Section 2.1 with respect to any Contribution become effective 
  for each Contribution on the date the Contributor first distributes such Contribution.

  2.3. Limitations on Grant Scope
  The licenses granted in this Section 2 are the only rights granted under this License. No 
  additional rights or licenses will be implied from the distribution or licensing of Covered 
  Software under this License. Notwithstanding Section 2.1(b) above, no patent license is 
  granted by a Contributor:

    a. for any code that a Contributor has removed from Covered Software; or

    b. for infringements caused by: (i) Your and any other third party’s modifications of 
    Covered Software, or (ii) the combination of its Contributions with other software 
    (except as part of its Contributor Version); or

    c. under Patent Claims infringed by Covered Software in the absence of its 
    Contributions.

  This License does not grant any rights in the trademarks, service marks, or logos of any 
  Contributor (except as may be necessary to comply with the notice requirements in 
  Section 3.4).

  2.4. Subsequent Licenses
  No Contributor makes additional grants as a result of Your choice to distribute the 
  Covered Software under a subsequent version of this License (see Section 10.2) or 
  under the terms of a Secondary License (if permitted under the terms of Section 3.3).

  2.5. Representation
  Each Contributor represents that the Contributor believes its Contributions are its 
  original creation(s) or it has sufficient rights to grant the rights to its Contributions 
  conveyed by this License.

  2.6. Fair Use
  This License is not intended to limit any rights You have under applicable copyright 
  doctrines of fair use, fair dealing, or other equivalents.

  2.7. Conditions
  Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted in Section 2.1.

  3. Responsibilities
  3.1. Distribution of Source Form
  All distribution of Covered Software in Source Code Form, including any Modifications 
  that You create or to which You contribute, must be under the terms of this License. You 
  must inform recipients that the Source Code Form of the Covered Software is governed 
  by the terms of this License, and how they can obtain a copy of this License. You may 
  not attempt to alter or restrict the recipients’ rights in the Source Code Form.

  3.2. Distribution of Executable Form
  If You distribute Covered Software in Executable Form then:

    a. such Covered Software must also be made available in Source Code Form, as 
    described in Section 3.1, and You must inform recipients of the Executable Form 
    how they can obtain a copy of such Source Code Form by reasonable means in a 
    timely manner, at a charge no more than the cost of distribution to the recipient; 
    and

    b. You may distribute such Executable Form under the terms of this License, or 
    sublicense it under different terms, provided that the license for the Executable 
    Form does not attempt to limit or alter the recipients’ rights in the Source Code 
    Form under this License.

  3.3. Distribution of a Larger Work
  You may create and distribute a Larger Work under terms of Your choice, provided that 
  You also comply with the requirements of this License for the Covered Software. If the 
  Larger Work is a combination of Covered Software with a work governed by one or 
  more Secondary Licenses, and the Covered Software is not Incompatible With 
  Secondary Licenses, this License permits You to additionally distribute such Covered 
  Software under the terms of such Secondary License(s), so that the recipient of the 
  Larger Work may, at their option, further distribute the Covered Software under the 
  terms of either this License or such Secondary License(s).

  3.4. Notices
  You may not remove or alter the substance of any license notices (including copyright 
  notices, patent notices, disclaimers of warranty, or limitations of liability) contained 
  within the Source Code Form of the Covered Software, except that You may alter any 
  license notices to the extent required to remedy known factual inaccuracies.

  3.5. Application of Additional Terms
  You may choose to offer, and to charge a fee for, warranty, support, indemnity or liability 
  obligations to one or more recipients of Covered Software. However, You may do so only 
  on Your own behalf, and not on behalf of any Contributor. You must make it absolutely 
  clear that any such warranty, support, indemnity, or liability obligation is offered by You 
  alone, and You hereby agree to indemnify every Contributor for any liability incurred by 
  such Contributor as a result of warranty, support, indemnity or liability terms You offer. 
  You may include additional disclaimers of warranty and limitations of liability specific to 
  any jurisdiction.

  4. Inability to Comply Due to Statute or Regulation
  If it is impossible for You to comply with any of the terms of this License with respect to 
  some or all of the Covered Software due to statute, judicial order, or regulation then You 
  must: (a) comply with the terms of this License to the maximum extent possible; and (b) 
  describe the limitations and the code they affect. Such description must be placed in a 
  text file included with all distributions of the Covered Software under this License. 
  Except to the extent prohibited by statute or regulation, such description must be 
  sufficiently detailed for a recipient of ordinary skill to be able to understand it.

  5. Termination
  5.1. The rights granted under this License will terminate automatically if You fail to 
  comply with any of its terms. However, if You become compliant, then the rights granted 
  under this License from a particular Contributor are reinstated (a) provisionally, unless 
  and until such Contributor explicitly and finally terminates Your grants, and (b) on an 
  ongoing basis, if such Contributor fails to notify You of the non-compliance by some 
  reasonable means prior to 60 days after You have come back into compliance. 
  Moreover, Your grants from a particular Contributor are reinstated on an ongoing basis 
  if such Contributor notifies You of the non-compliance by some reasonable means, this 
  is the first time You have received notice of non-compliance with this License from such 
  Contributor, and You become compliant prior to 30 days after Your receipt of the notice.

  5.2. If You initiate litigation against any entity by asserting a patent infringement claim 
  (excluding declaratory judgment actions, counter-claims, and cross-claims) alleging that 
  a Contributor Version directly or indirectly infringes any patent, then the rights granted 
  to You by any and all Contributors for the Covered Software under Section 2.1 of this 
  License shall terminate.

  5.3. In the event of termination under Sections 5.1 or 5.2 above, all end user license 
  agreements (excluding distributors and resellers) which have been validly granted by 
  You or Your distributors under this License prior to termination shall survive termination.

  6. Disclaimer of Warranty
  Covered Software is provided under this License on an “as is” basis, without warranty of 
  any kind, either expressed, implied, or statutory, including, without limitation, warranties 
  that the Covered Software is free of defects, merchantable, fit for a particular purpose 
  or non-infringing. The entire risk as to the quality and performance of the Covered 
  Software is with You. Should any Covered Software prove defective in any respect, You 
  (not any Contributor) assume the cost of any necessary servicing, repair, or correction. 
  This disclaimer of warranty constitutes an essential part of this License. No use of any 
  Covered Software is authorized under this License except under this disclaimer.

  7. Limitation of Liability
  Under no circumstances and under no legal theory, whether tort (including negligence), 
  contract, or otherwise, shall any Contributor, or anyone who distributes Covered 
  Software as permitted above, be liable to You for any direct, indirect, special, incidental, 
  or consequential damages of any character including, without limitation, damages for 
  lost profits, loss of goodwill, work stoppage, computer failure or malfunction, or any and 
  all other commercial damages or losses, even if such party shall have been informed of 
  the possibility of such damages. This limitation of liability shall not apply to liability for 
  death or personal injury resulting from such party’s negligence to the extent applicable 
  law prohibits such limitation. Some jurisdictions do not allow the exclusion or limitation 
  of incidental or consequential damages, so this exclusion and limitation may not apply to 
  You.

  8. Litigation
  Any litigation relating to this License may be brought only in the courts of a jurisdiction 
  where the defendant maintains its principal place of business and such litigation shall be 
  governed by laws of that jurisdiction, without reference to its conflict-of-law provisions. 
  Nothing in this Section shall prevent a party’s ability to bring cross-claims or counter-
  claims.

  9. Miscellaneous
  This License represents the complete agreement concerning the subject matter hereof. 
  If any provision of this License is held to be unenforceable, such provision shall be 
  reformed only to the extent necessary to make it enforceable. Any law or regulation 
  which provides that the language of a contract shall be construed against the drafter 
  shall not be used to construe this License against a Contributor.

  10. Versions of the License
  10.1. New Versions
  Mozilla Foundation is the license steward. Except as provided in Section 10.3, no one 
  other than the license steward has the right to modify or publish new versions of this 
  License. Each version will be given a distinguishing version number.

  10.2. Effect of New Versions
  You may distribute the Covered Software under the terms of the version of the License 
  under which You originally received the Covered Software, or under the terms of any 
  subsequent version published by the license steward.

  10.3. Modified Versions
  If you create software not governed by this License, and you want to create a new 
  license for such software, you may create and use a modified version of this License if 
  you rename the license and remove any references to the name of the license steward 
  (except to note that such modified license differs from this License).

  10.4. Distributing Source Code Form that is Incompatible With Secondary Licenses
  If You choose to distribute Source Code Form that is Incompatible With Secondary 
  Licenses under the terms of this version of the License, the notice described in Exhibit 
  B of this License must be attached.

  Exhibit A - Source Code Form License Notice

  This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a 
  copy of the MPL was not distributed with this file, You can obtain one at 
  ${renderLicenseLink(license)}

  If it is not possible or desirable to put the notice in a particular file, then You may include 
  the notice in a location (such as a LICENSE file in a relevant directory) where a recipient 
  would be likely to look for such a notice.

  You may add additional accurate notices of copyright ownership.

  Exhibit B - “Incompatible With Secondary Licenses” Notice
  This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the 
  Mozilla Public License, v. 2.0.
  `;
  } else if (license == 'The Unlicense'){
  return `
  ${renderLicenseBadge(license)}
    
  This is free and unencumbered software released into the public domain.

  Anyone is free to copy, modify, publish, use, compile, sell, or
  distribute this software, either in source code form or as a compiled
  binary, for any purpose, commercial or non-commercial, and by any
  means.

  In jurisdictions that recognize copyright laws, the author or authors
  of this software dedicate any and all copyright interest in the
  software to the public domain. We make this dedication for the benefit
  of the public at large and to the detriment of our heirs and
  successors. We intend this dedication to be an overt act of
  relinquishment in perpetuity of all present and future rights to this
  software under copyright law.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  OTHER DEALINGS IN THE SOFTWARE.

  For more information, please refer to ${renderLicenseLink(license)}
  `;
  }
}

//Allows the returned data to be sent to index.js for writeToFile()
export default generateMarkdown;  