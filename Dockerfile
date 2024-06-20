FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Toputech/Topu-ai.git /root/Toputechmd

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Toputechmd/node_modules

# Install dependencies
WORKDIR /root/Toputechmd
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
# IF YOU ARE MODIFYING THIS BOT DONT CHANGE THIS  RUN rm -rf /root/Toputechmd/node_modules
